"use client";

import { motion, stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export const TextGenerateEffect = ({
    lineOne,
    lineTwo,
    className,
}: {
    lineOne: string;
    lineTwo: string;
    className?: string;
}) => {
    const [scope, animate] = useAnimate();
    let wordsArrayOne = lineOne.split(" ");
    let wordsArrayTwo = lineTwo.split(" ");

    useEffect(() => {
        animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scope.current]);

    const renderWords = () => {
        return (
            <motion.div ref={scope}>
                {wordsArrayOne.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className="opacity-0">
                            {word}{" "}
                        </motion.span>
                    );
                })}
                <br />
                {wordsArrayTwo.map((word, idx) => {
                    return (
                        <motion.span key={word + idx} className="opacity-0">
                            {word}{" "}
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className={className}>
            <div className="mt-4">
                <div className="bg-clip-text pb-4 text-center font-bold md:text-4xl xl:text-5xl 2xl:text-7xl">
                    {renderWords()}
                </div>
            </div>
        </div>
    );
};
