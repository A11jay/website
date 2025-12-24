import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ajay Singh Rana AI Product Manager",
  description: "Portfolio of Ajay Singh Rana - AI Product Manager & Vibe Coding Enthusiast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased bg-background text-foreground min-h-screen")} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
