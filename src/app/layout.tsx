import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

import { cn } from "@/lib/utils";
import { QueryProviders } from "@/components/query-provider";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taskify",
  description:
    "Taskify is a simple task management app that helps you stay organized and get things done.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen")}>
        <QueryProviders>
          <Toaster />
          {children}
          <Analytics />
          <SpeedInsights />
        </QueryProviders>
      </body>
    </html>
  );
}
