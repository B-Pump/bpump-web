"use client";

import Image from "next/image";

import { CardBody, CardContainer, CardItem } from "@/components/ui/threed-card";

export function ThreeDCard() {
    return (
        <CardContainer>
            <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    Make things float in air
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                        src="https://black_hole-3kf-1-q4182424.deta.app/api/photo/6ojcph3dg21s.jpeg"
                        height="1000"
                        width="1000"
                        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="mt-20 flex items-center justify-between">
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                    >
                        Try now →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                    >
                        Sign up
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
