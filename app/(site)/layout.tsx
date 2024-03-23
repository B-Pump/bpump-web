"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface SiteLayoutProps {
    children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="relative flex flex-col">
            <Header />
            <main className="flex-1 pb-8">{children}</main>
            <Footer />
        </div>
    );
}
