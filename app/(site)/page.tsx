"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Tooltip } from "@/components/ui/tooltip";
import useFetch from "../api/bpump";

export default function Home() {
    const { data, isLoading, error } = useFetch("GET", "exos/all");
    const people = [
        {
            id: 1,
            name: "Pierre H.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/zxafgkb7dy1w.png",
        },
        // {
        //     id: 2,
        //     name: "Auguste C.",
        //     designation: "Programmation",
        //     image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        // },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/13p2skah8fqp.png",
        },
        // {
        //     id: 4,
        //     name: "Emma B.",
        //     designation: "Design",
        //     image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        // },
        // {
        //     id: 5,
        //     name: "Nathan C.",
        //     designation: "Programmation",
        //     image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
        // },
        // {
        //     id: 6,
        //     name: "Léo B.",
        //     designation: "Communication",
        //     image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
        // },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Procurrez vous un robot B-Pump
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    La perfection dans chaque mouvements. Améliorez la justesse de vos postures grâce à B-Pump, votre
                    coach sportif 100% Robotique !
                </p>
            </div>
            <div className="flex gap-4">
                <Button
                    onClick={() =>
                        toast("Voici une notification", {
                            description: "Je suis une notification",
                            action: {
                                label: "Bilal",
                                onClick: () => console.log("Bilaaaaal"),
                            },
                        })
                    }
                >
                    Notif
                </Button>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <Tooltip items={people} />
                </div>
            </div>
            <div>
                {isLoading ? (
                    <div className="flex items-center space-x-4">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-[250px]" />
                            <Skeleton className="h-4 w-[200px]" />
                        </div>
                    </div>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    data?.map((item: any, index: number) => <p key={index}>{item.sugar.title}</p>)
                )}
            </div>
        </section>
    );
}
