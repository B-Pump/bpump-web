import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/context/theme";

import { AuthProvider } from "@/context/auth";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

import config from "@/config/config.json";

export const metadata: Metadata = {
    title: {
        default: config.sugar.title,
        template: `%s | ${config.sugar.title}`,
    },
    description: config.sugar.description,
    keywords: config.sugar.keywords,
    authors: config.author,
    creator: config.author[0].name,
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
                <AuthProvider>
                    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                        {children}
                        <SpeedInsights />
                        <Analytics />
                        <Toaster position="bottom-center" className="select-none" />
                    </ThemeProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
