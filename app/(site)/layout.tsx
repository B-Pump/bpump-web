import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

interface SiteLayoutProps {
    children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 container md:py-10 pb-8 pt-6">{children}</main>
            <Footer />
        </div>
    );
}
