"use client";

import { BentoGridThird } from "@/components/grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Tooltip } from "@/components/ui/tooltip";
import Image from "next/image";
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
    const items = [
        {
            i:1,
            title:"Une équipe de lycéens",
            description: "B-Pump a été entiérement réalisé par une équipe de terminales au Lycée Galilée",
            header: <Image
            alt="Image du lycée galilée"
            src="https://i.imgur.com/LFcdWtd.jpeg"
            height="0"
            width={200}
            className="-mb-4 h-auto w-[100%] rounded-xl"
        />
        },
        {
            i:2,
            title:"Un projet olympique",
            description: "B-Pump a été réalisé dans le cadre des olympiades de science de l'ingénieur des lycéees",
            header: <Image
            alt="Image du lycée galilée"
            src="https://i.imgur.com/LFcdWtd.jpeg"
            height="0"
            width={200}
            className="-mb-4 h-auto w-[100%] rounded-xl"
        />
        }
    ]

    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10">
                <section id="our-team">
                    <div className="mb-10 flex w-full flex-row items-center justify-center">
                        <Tooltip items={people} />
                    </div>
                </section>
                <section id="tech-details">
                    <BentoGrid className="mx-auto max-w-4xl">
                        {items.map((item, i) => (
                            <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
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
