import type { Metadata, Viewport } from "next";
import { images, site } from "@/content/music";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: "/" },
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.title,
    title: site.title,
    description: site.description,
    images: [{ url: images.og.src, width: images.og.width, height: images.og.height, alt: images.og.alt }],
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description, images: [images.og.src] },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1d1713",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <div className="bg" role="img" aria-label={images.backgroundAlt} />
        {children}
      </body>
    </html>
  );
}
