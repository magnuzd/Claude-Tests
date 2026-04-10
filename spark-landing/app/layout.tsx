import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spark | Simplify Your Finances and Grow Your Business",
  description:
    "We provide customized accounting services for businesses to save time, lessen stress, and increase profits.",
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
