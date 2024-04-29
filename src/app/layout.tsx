import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { Toaster } from "@/components/ui/toast";

import { ThemeProvider } from "@/context/theme";
import { cn } from "@/lib/utils";

import config from "@/config.json";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

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
            <body className={cn("font-sans antialiased selection:bg-muted", fontSans.variable)}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
                    {children}
                    <Toaster position="bottom-center" className="select-none" />
                </ThemeProvider>
            </body>
        </html>
    );
}
