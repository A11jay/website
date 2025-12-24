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
      <body className={cn(inter.className, "antialiased bg-background text-foreground min-h-screen relative overflow-x-hidden")} suppressHydrationWarning>
        {/* x.ai Glow Effect */}
        <div className="fixed inset-0 z-[-1]">
          <div className="absolute top-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] h-[300px] w-[300px] rounded-full bg-indigo-500/10 blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>
        {children}
      </body>
    </html>
  );
}
