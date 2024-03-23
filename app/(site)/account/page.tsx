"use client";

import { useAuth } from "@/context/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Account() {
    const { authState } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!authState?.authenticated) router.replace("/");
    }, [authState, router]);

    return;
}
