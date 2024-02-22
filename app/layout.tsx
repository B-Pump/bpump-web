import "@/styles/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import config from "../config/config.json";

export const metadata: Metadata = {
    title: {
        default: config.sugar.title,
        template: `%s | ${config.sugar.title}`,
    },
    description: config.sugar.description,
    keywords: config.sugar.keywords,
    authors: [{ name: "wiizz", url: "https://githhub.com/wiizzl" }],
    creator: "wiizz",
    icons: {
        icon: "/favicon.ico",
    },
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="fr" suppressHydrationWarning>
            <head />
            <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    {children}
                    <Toaster position="bottom-center" className="select-none" />
                </ThemeProvider>
            </body>
        </html>
    );
}
