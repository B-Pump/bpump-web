"use client";

import { BentoGridThird } from "@/components/grid";
import { Tooltip } from "@/components/ui/tooltip";

import { AnimatedPin } from "@/components/ui/pin";

export default function About() {
    const people = [
        {
            id: 1,
            name: "Pierre H.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/zxafgkb7dy1w.png",
        },
        {
            id: 2,
            name: "Auguste G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/nalmvys51hlp.jpeg",
        },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/35zjwqvkwtk2.jpg",
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
            <div className="container pt-6 md:py-10">
                <section id="our-team">
                    <div className="mb-10 flex w-full flex-row items-center justify-center">
                        <Tooltip items={people} />
                    </div>
                </section>
                <section id="tech-details">
                    <BentoGridThird />
                </section>
                <section id="sys-details">
                    <div className="flex h-[40rem] w-full items-center justify-center ">
                        <AnimatedPin title="test" description="dsvsdhjvdshj" link="google.com" />
                        <AnimatedPin title="test" description="dsvsdhjvdshj" link="google.com" />
                    </div>
                </section>
            </div>
        </section>
    );
}
