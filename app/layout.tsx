import "../styles/globals.css";

import type { Metadata } from "next";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Projet B-Pump",
    description: "Website of B-Pump project",
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
                    <div className="relative flex min-h-screen flex-col">
                        <Header />
                        <div className="flex-1">{children}</div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
