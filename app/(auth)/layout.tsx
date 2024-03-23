"use client";

import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { authState } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authState?.authenticated) router.replace("/");
    }, [authState, router]);

    return <div className="min-h-screen">{children}</div>;
}
