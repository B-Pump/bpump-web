"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/lib/utils";

const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <h4 className={cn("font-bold tracking-wide mt-4", className)}>{children}</h4>;
};
const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return <p className={cn("mt-8 text-muted-foreground tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};

const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-background border dark:border-card group-hover:border-card relative z-20",
                className,
            )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const HoverCard = ({
    items,
    className,
}: {
    items: {
        title: string;
        description: string;
        link: string;
    }[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="mx-auto -mt-32 max-w-5xl px-8 md:mt-auto">
            <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 text-center", className)}>
                {items.map((item, index) => (
                    <Link
                        href={item.link}
                        className="group relative block size-full p-2"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        key={index}
                    >
                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.span
                                    className="absolute inset-0 block size-full rounded-3xl bg-muted"
                                    layoutId="hoverBackground"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: 1,
                                        transition: { duration: 0.15 },
                                    }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.15, delay: 0.2 },
                                    }}
                                />
                            )}
                        </AnimatePresence>
                        <Card>
                            <CardTitle>{item.title}</CardTitle>
                            <CardDescription>{item.description}</CardDescription>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};
