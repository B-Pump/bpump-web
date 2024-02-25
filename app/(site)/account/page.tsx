"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Account() {
    const router = useRouter();
    const { data, status } = useSession();
    console.log(data);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.replace("/login");
        }
    }, [status, router]);

    if (status === "authenticated") {
        return (
            <section className="grid items-center gap-6">
                <div className="container">
                    <p>Account : {JSON.stringify(data.user, null, 2)}</p>
                </div>
            </section>
        );
    }
}
