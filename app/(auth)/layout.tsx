"use client";

import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { authenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authenticated) router.replace("/");
    }, [authenticated, router]);

    return <div className="min-h-screen">{children}</div>;
}
