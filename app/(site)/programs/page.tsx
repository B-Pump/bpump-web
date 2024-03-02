"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Programmes() {
    const router = useRouter();
    const { status } = useSession();
    useEffect(() => {
        if (status === "unauthenticated") router.replace("/login");
    }, [status, router]);
    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10"></div>
        </section>
    );
}
