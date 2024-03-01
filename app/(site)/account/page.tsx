"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Account() {
    const router = useRouter();
    const { data, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") router.replace("/login");
    }, [status, router]);
}
