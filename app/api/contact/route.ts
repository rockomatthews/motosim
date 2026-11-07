import { createHash } from "node:crypto";
import { readBody, validOrigin } from "@/lib/server";
export async function POST(request: Request) {
  if (!validOrigin(request))
    return Response.json(
      { error: "Please use the MotoSIM contact form." },
      { status: 403 },
    );
  try {
    const b = await readBody(request);
    if (b.website) return Response.json({ ok: true });
    const { name, email, message, interest, consent, requestId } = b;
    if (
      typeof name !== "string" ||
      name.trim().length < 2 ||
      name.length > 100 ||
      typeof email !== "string" ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      typeof message !== "string" ||
      message.trim().length < 15 ||
      message.length > 5000 ||
      consent !== true ||
      typeof requestId !== "string" ||
      !/^[\da-f-]{36}$/i.test(requestId) ||
      !["Funding", "Engineering", "Rider testing", "Press", "Other"].includes(
        interest,
      )
    )
      return Response.json(
        {
          error:
            "Please check your name, email, message (15–5,000 characters), and consent.",
        },
        { status: 400 },
      );
    if (!process.env.RESEND_API_KEY)
      return Response.json(
        {
          error:
            "The contact form is not connected yet. Please email rob@rocketship.codes directly.",
        },
        { status: 503 },
      );
    // Plain text keeps user input out of HTML and headers. Fixed recipient prevents mail relay abuse.
    const body = {
      from: process.env.CONTACT_FROM || "MotoSIM <motosim@rocketship.codes>",
      to: ["rob@rocketship.codes"],
      reply_to: email,
      subject: `MotoSIM inquiry: ${interest}`,
      text: `Name: ${name.trim()}\nEmail: ${email}\nInterest: ${interest}\n\n${message.trim()}\n\nSubmitted with contact consent. No marketing subscription requested.`,
    };
    const key = createHash("sha256")
      .update(`${requestId}:${email}`)
      .digest("hex");
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `motosim-contact-${key}`,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(15000),
    });
    if (!result.ok)
      return Response.json(
        {
          error:
            "Your message could not be submitted. Please try again or email rob@rocketship.codes.",
        },
        { status: 502 },
      );
    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        error:
          "We could not submit your message. Please check the fields and try again.",
      },
      { status: 400 },
    );
  }
}
