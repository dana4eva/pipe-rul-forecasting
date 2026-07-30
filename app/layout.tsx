import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pipe RUL Forecasting",
  description: "Pipeline Remaining Useful Life Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}