import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import JsonLd from "@/components/ui/JsonLd";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { SITE } from "@/lib/constants";
import { organizationJsonLd } from "@/lib/metadata";

const manrope = localFont({
  src: [
    {
      path: "./fonts/Manrope-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Manrope-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-manrope",
  display: "swap",
});

const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Roboto-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: SITE.titleTemplate,
  },
  description: SITE.defaultDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${roboto.variable}`}>
      <body>
        <JsonLd json={organizationJsonLd} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
