"use client";

import { IconChartArea, IconHome, IconShirtSport } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import { useAuth } from "@/context/auth";
import useFetch from "@/lib/api";

export default function Account() {
    const { authState } = useAuth();
    const router = useRouter();

    const { data, isLoading, error } = useFetch("GET", `progs/all?username=${authState?.token}`);

    useEffect(() => {
        if (!authState?.authenticated) router.replace("/");
    }, [authState, router]);

    const [selectedTab, setSelectedTab] = useState("account");

    const items = [
        {
            title: "Votre compte",
            value: "account",
            icon: <IconHome className="size-4" />,
            content: (
                <div>
                    <h1>
                        Bonjour,{" "}
                        {authState?.token && authState.token.charAt(0).toUpperCase() + authState.token.slice(1)}
                    </h1>
                </div>
            ),
        },
        {
            title: "Vos programmes",
            value: "programs",
            icon: <IconShirtSport className="size-4" />,
            content: (
                <div>
                    {isLoading ? (
                        <>{/* TODO: Skeleton */}</>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            {data === "[]" ? (
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        Vous n&apos;avez aucun programmes
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez désormais en créer depuis le site !
                                    </p>
                                    <Button className="mt-4">Ajouer un programme</Button>
                                </div>
                            ) : (
                                <>{data && data.map((item: Progs, index: string) => <p key={index}>{item.title}</p>)}</>
                            )}
                        </>
                    )}
                </div>
            ),
        },
        {
            title: "Statistiques",
            value: "statistics",
            icon: <IconChartArea className="size-4" />,
            content: <div></div>,
        },
    ];

    return (
        <div className="grid min-h-[93vh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="border-r">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center gap-2 border-b px-2 lg:h-[60px] lg:px-6">
                        <p>Dashboard</p>
                    </div>
                    <nav className="grid items-start px-2 font-medium lg:px-4">
                        {items.map((item, index) => (
                            <Button
                                variant="ghost"
                                onClick={() => setSelectedTab(item.value)}
                                className={`justify-start gap-3 text-base text-muted-foreground hover:text-primary ${
                                    selectedTab === item.value && "text-primary"
                                }`}
                                key={index}
                            >
                                {item.icon}
                                {item.title}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {items.map((item, index) => {
                        if (selectedTab === item.value)
                            return (
                                <div
                                    className="flex flex-1 gap-4 rounded-lg border border-dashed p-4 lg:gap-6 lg:p-6"
                                    key={index}
                                >
                                    {item.content}
                                </div>
                            );
                    })}
                </div>
            </div>
        </div>
    );
}
