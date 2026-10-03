import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zyca Cafe & Kitchen — Good food. Good mood.",
  description: "A neighbourhood cafe and kitchen serving honest, happy food in the heart of Bandra.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
