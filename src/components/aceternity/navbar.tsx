"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";

import config from "@/config.json";

export const FloatingNavBar = () => {
    const { scrollYProgress } = useScroll();

    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            let direction = current! - scrollYProgress.getPrevious()!;

            if (scrollYProgress.get() < 0.05) {
                setVisible(false);
            } else {
                if (direction < 0) {
                    setVisible(true);
                } else setVisible(false);
            }
        }
    });

    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{
                    opacity: 1,
                    y: -100,
                }}
                animate={{
                    y: visible ? 0 : -100,
                    opacity: visible ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="fixed inset-x-0 top-7 z-50 mx-auto max-w-fit space-x-2 rounded-full bg-background px-4 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            >
                {config.link.map((item, index: number) => (
                    <Link
                        key={index}
                        href={`/${item.href}`}
                        className={buttonVariants({ variant: "ghost", className: "hover:bg-transparent" })}
                    >
                        <span className="text-sm">{item.title}</span>
                    </Link>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
