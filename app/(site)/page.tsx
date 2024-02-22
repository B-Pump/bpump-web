"use client";

import { ThreeDCard } from "@/components/3d-card";
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
        {
            id: 2,
            name: "Auguste C.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/nalmvys51hlp.jpeg",
        },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/13p2skah8fqp.png",
        },
        {
            id: 4,
            name: "Emma B.",
            designation: "Design",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/t2z09p1bzxmx.png",
        },
        {
            id: 5,
            name: "Nathan C.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/tcnrpl9x6f99.png",
        },
        {
            id: 6,
            name: "Léo B.",
            designation: "Communication",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/giv23ixqn90o.png",
        },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="flex">
                <div className="flex max-w-[980px] flex-col items-start gap-2">
                    <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                        Projet B-Pump
                    </h1>
                    <p className="max-w-[700px] text-lg text-muted-foreground">
                        La perfection dans chaque mouvements. Améliorez la justesse de vos postures grâce à B-Pump,
                        votre coach sportif 100% Robotique !
                    </p>
                </div>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                    <Tooltip items={people} />
                </div>
            </div>
            <ThreeDCard />
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
