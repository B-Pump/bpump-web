"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export const MaskContainer = ({
    children,
    revealText,
    size = 10,
    revealSize = 600,
    className,
}: {
    children?: string | React.ReactNode;
    revealText?: string | React.ReactNode;
    size?: number;
    revealSize?: number;
    className?: string;
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const [mousePosition, setMousePosition] = useState<any>({ x: null, y: null });
    const containerRef = useRef<any>(null);

    const updateMousePosition = (e: any) => {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    useEffect(() => {
        containerRef.current.addEventListener("mousemove", updateMousePosition);
        return () => {
            if (containerRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                containerRef.current.removeEventListener("mousemove", updateMousePosition);
            }
        };
    }, []);
    let maskSize = isHovered ? revealSize : size;

    return (
        <motion.div ref={containerRef} className={cn("h-screen relative", className)}>
            <motion.div
                className="absolute flex size-full items-center justify-center text-6xl [mask-image:url(/svg/mask.svg)] [mask-repeat:no-repeat] [mask-size:40px]"
                animate={{
                    WebkitMaskPosition: `${mousePosition.x - maskSize / 2}px ${mousePosition.y - maskSize / 2}px`,
                    WebkitMaskSize: `${maskSize}px`,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            >
                <div className="absolute inset-0 z-0 size-full bg-accent-foreground" />
                <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="relative z-20 mx-auto max-w-4xl">
                    <p className="text-center text-4xl font-bold text-accent">{children}</p>
                </div>
            </motion.div>
            <div className="flex size-full items-center justify-center">{revealText}</div>
        </motion.div>
    );
};
