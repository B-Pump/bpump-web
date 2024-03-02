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

    if (status === "authenticated") {
        return (
            <section className="grid items-center gap-6">
                <div className="container">
                    <p>Account : {JSON.stringify(data.user, null, 2)}</p>
                </div>
            </section>
        );
    } else {
        return (
            <div className="container">
                <h1>Merci de rafraîchir la page pour accèder à cette page</h1>
            </div>
        );
    }
}
