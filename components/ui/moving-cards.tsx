"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
    items,
    direction = "right",
    speed = "slow",
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    className?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            if (containerRef.current) {
                if (direction === "left") {
                    containerRef.current.style.setProperty("--animation-direction", "forwards");
                } else {
                    containerRef.current.style.setProperty("--animation-direction", "reverse");
                }
            }
            if (containerRef.current) {
                if (speed === "fast") {
                    containerRef.current.style.setProperty("--animation-duration", "20s");
                } else if (speed === "normal") {
                    containerRef.current.style.setProperty("--animation-duration", "40s");
                } else {
                    containerRef.current.style.setProperty("--animation-duration", "110s");
                }
            }
            setStart(true);
        }
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className,
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn("flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap", start && "animate-scroll ")}
            >
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="bg-neutral-200 dark:bg-card w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-card px-8 py-6 md:w-[450px]"
                    >
                        <blockquote className="select-none">
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className="relative z-20 text-sm leading-[1.6] font-normal">{item.quote}</span>
                            <div className="relative z-20 mt-6 flex flex-row items-center">
                                <span className="flex flex-col gap-1">
                                    <span className="text-sm leading-[1.6] dark:text-gray-400 font-normal">
                                        {item.name}
                                    </span>
                                    <span className="text-sm leading-[1.6] dark:text-gray-400 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
