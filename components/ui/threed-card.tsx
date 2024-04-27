"use client";

import Image from "next/image";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { useCartStore } from "@/context/cart";
import { cn } from "@/lib/utils";

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(
    undefined,
);

const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn("flex items-center justify-center", containerClassName)}
                style={{
                    perspective: "1000px",
                }}
            >
                <div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className,
                    )}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}
                </div>
            </div>
        </MouseEnterContext.Provider>
    );
};

const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className={cn("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]", className)}>
            {children}
        </div>
    );
};

const CardItem = ({
    as: Tag = "div",
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
    ...rest
}: {
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        handleAnimations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMouseEntered]);

    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };

    return (
        <Tag ref={ref} className={cn("w-fit transition duration-200 ease-linear", className)} {...rest}>
            {children}
        </Tag>
    );
};

const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};

export function ThreeDCard(props: CartItem) {
    const { setContent } = useCartStore();

    return (
        <CardContainer className="select-none">
            <CardBody className="group/card relative size-auto  rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                    {props.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
                >
                    {props.description}
                </CardItem>
                <CardItem translateZ="100" className="mt-4 w-full">
                    <Image
                        src={props.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                        alt="Product"
                        priority
                    />
                </CardItem>
                <div className="mt-20 flex items-end justify-end">
                    <CardItem>
                        <Button
                            variant="secondary"
                            onClick={() => {
                                setContent((prevContent: CartItem[]): CartItem[] => [...prevContent, props]);
                                toast("Panier", {
                                    description: `${props.title} ajouté au panier avec succès !`,
                                });
                            }}
                        >
                            Ajouter au panier - {props.price} &#8364;
                        </Button>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
