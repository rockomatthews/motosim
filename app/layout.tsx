import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3017"),
  ),
  title: {
    default: "MotoSIM — Feel the lean. Fund the future.",
    template: "%s | MotoSIM",
  },
  description:
    "Help build an American motorcycle racing simulator. Physical lean, steering feedback and required VR. Explore the prototype, research and funding plan.",
  openGraph: {
    type: "website",
    siteName: "MotoSIM",
    locale: "en_US",
    title: "MotoSIM — The next apex is virtual.",
    description:
      "Whole-body motorcycle simulation. A real plan. A prototype worth backing.",
    images: [
      {
        url: "/media/motosim-cyber-rider-social-v2.webp",
        width: 1734,
        height: 907,
        type: "image/webp",
        alt: "A wild cartoon biker carving a neon corner on a red, white and blue cyber motorcycle beneath the MotoSIM logo.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MotoSIM — The next apex is virtual.",
    description:
      "Whole-body motorcycle simulation. A real plan. A prototype worth backing.",
    images: [
      {
        url: "/media/motosim-cyber-rider-social-v2.webp",
        alt: "MotoSIM cartoon cyber biker on a red, white and blue racing motorcycle.",
      },
    ],
  },
  icons: { icon: "/icon.svg" },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
