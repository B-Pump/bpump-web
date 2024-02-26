"use client";

import { ThreeDCard } from "@/components/3d-card";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

export default function Boutique() {
    const products = [
        {
            title: "Porte clef",
            description: "Emportez l'esprit novateur de notre projet partout avec vous grâce à ce porte-clés exclusif.",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/3qhdz53wpw9t.png",
        },
        {
            title: "Figurine",
            description:
                "Plongez dans l'univers captivant de notre projet avec cette adorable figurine à l'effigie de B-Pump. ",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/3qhdz53wpw9t.png",
        },
        {
            title: "Casquette B-Pump",
            description:
                "Adoptez le style unique de notre projet avec cette casquette tendance, alliant confort et élégance.",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/3qhdz53wpw9t.png",
        },
    ];

    return (
        <>
            <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
                <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
                <div>
                    <div className="relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
                        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold dark:text-transparent md:text-7xl">
                            Procurez vous B-Pump
                        </h1>
                        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-muted-foreground">
                            Spotlight effect is a great way to draw attention to a specific part of the page. Here, we
                            are drawing the attention towards the text section of the page. I don&apos;t know why but
                            I&apos;m running out of copy.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button variant="destructive">Galaad petit gentil</Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {products.map((item, index) => (
                    <ThreeDCard key={index} title={item.title} description={item.description} image={item.image} />
                ))}
            </div>
        </>
    );
}
