"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import useFetch from "../api/bpump";

export default function Home() {
    const { data, isLoading, error } = useFetch("GET", "exos/all");
    console.log(data);

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
