"use client";

import { useState } from "react";

import { ThreeDCard } from "@/components/3d-card";
import { Model } from "@/components/model";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";

export default function Boutique() {
    const [isGrabbing, setIsGrabbing] = useState(false);

    const accordion = [
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
        { title: "Coucou je suis Galaad", description: "Oui tu l'es" },
    ];

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
            <div className="relative flex h-[30rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
                <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
                <div>
                    <div className="relative z-10 mx-auto w-full max-w-7xl select-none p-4 pt-20 md:pt-0">
                        <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold dark:text-transparent md:text-7xl">
                            Procurez vous B-Pump
                        </h1>
                        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-muted-foreground">
                            Transformez votre routine d&apos;entraînement avec B-pump ! Atteignez vos objectifs de
                            remise en forme avec facilité et motivation. Commandez le vôtre dès maintenant et
                            laissez-vous guider vers le succès !
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <Button>Acheter dès maintenant</Button>
                    </div>
                    <p className="flex justify-center pt-3 text-muted-foreground">À partir de 200€</p>
                </div>
            </div>
            <div className="flex h-[80vh] pb-20">
                <div
                    className={cn("w-1/2", isGrabbing ? "cursor-grabbing" : "cursor-grab")}
                    onMouseDown={() => setIsGrabbing(true)}
                    onMouseUp={() => setIsGrabbing(false)}
                >
                    <Model />
                </div>
                <div className="flex w-1/2 items-center justify-center p-4">
                    <Accordion type="single" collapsible className="w-3/4">
                        {accordion.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>{item.description}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
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
