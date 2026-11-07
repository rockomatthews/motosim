import Stripe from "stripe";
export function stripe() {
  return process.env.STRIPE_SECRET_KEY
    ? new Stripe(process.env.STRIPE_SECRET_KEY, {
        timeout: 15000,
        maxNetworkRetries: 1,
      })
    : null;
}
export function siteOrigin(request: Request) {
  const configured = process.env.SITE_URL;
  if (configured) return new URL(configured).origin;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL)
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  // Next may normalize the internal URL to localhost behind its local server.
  // The HTTP Host header preserves the actual browser-facing origin.
  const url = new URL(request.url);
  const host = request.headers.get('host');
  if (host && /^[a-z0-9.\-:[\]]+$/i.test(host)) url.host = host;
  return url.origin;
}
export function validOrigin(request: Request) {
  return request.headers.get("origin") === siteOrigin(request);
}
export async function readBody(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json"))
    throw new Error("Invalid content type");
  const text = await request.text();
  if (text.length > 12000) throw new Error("Request too large");
  const body = JSON.parse(text);
  if (!body || typeof body !== "object" || Array.isArray(body))
    throw new Error("Invalid body");
  return body;
}
