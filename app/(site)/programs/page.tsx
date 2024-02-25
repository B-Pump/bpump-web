"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import useFetch from "@/lib/api";

export default function Programs() {
    const router = useRouter();
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === "unauthenticated") router.replace("/login");
    }, [status, router]);

    const { data, isLoading, error } = useFetch("GET", `progs/all?username=pierre`);

    return (
        <section className="grid items-center gap-6">
            <div className="container">
                <div>
                    {isLoading ? (
                        <div className="flex items-center space-x-4">
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[250px]" />
                                <Skeleton className="h-4 w-[200px]" />
                            </div>
                        </div>
                    ) : error ? (
                        <p>{error.message}</p>
                    ) : (
                        data?.map((item: any, index: number) => <p key={index}>{item.title}</p>)
                    )}
                </div>
            </div>
        </section>
    );
}
