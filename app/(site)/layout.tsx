"use client";

import { SessionProvider } from "next-auth/react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface SiteLayoutProps {
    children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    const session = {
        expires: "test",
    };

    return (
        <SessionProvider>
            <div className="relative flex flex-col">
                <Header />
                <main className="flex-1 md:py-10 pb-8 pt-6">{children}</main>
                <Footer />
            </div>
        </SessionProvider>
    );
}
