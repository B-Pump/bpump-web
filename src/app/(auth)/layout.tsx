"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useAuth } from "@/context/auth";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    const { authenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (authenticated) router.replace("/");
    }, [authenticated, router]);

    return <main className="flex-1">{children}</main>;
}
