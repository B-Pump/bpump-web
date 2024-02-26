"use client";

import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/threed-card";

export function ThreeDCard({ title, description, image }: { title: string; description: string; image: string }) {
    return (
        <CardContainer className="select-none">
            <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                        src={image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="Product"
                    />
                </CardItem>
                <div className="mt-20 flex items-end justify-end">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                    >
                        Ajouter au panier
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
