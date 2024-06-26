import { FloatingNavBar } from "@/components/aceternity/navbar";
import Footer from "@/components/footer";
import Header from "@/components/header";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <Header />
            <FloatingNavBar />
            <main className="flex-1">{children}</main>
            <Footer />
        </>
    );
}
