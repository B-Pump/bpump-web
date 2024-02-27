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

    const products = [
        {
            title: "Porte clef",
            description:
                "Emportez l&apos;esprit novateur de notre projet partout avec vous grâce à ce porte-clés exclusif.",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/3qhdz53wpw9t.png",
        },
        {
            title: "Figurine",
            description:
                "Plongez dans l&apos;univers captivant de notre projet avec cette adorable figurine à l&apos;effigie de B-Pump. ",
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
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Est-ce animé?</AccordionTrigger>
                            <AccordionContent>
                                Oui, il est animé par défaut, mais vous pouvez le désactiver si vous le préférez.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Comment le robot de sport autonome fonctionne-t-il?</AccordionTrigger>
                            <AccordionContent>
                                Le robot de sport autonome utilise des capteurs et des algorithmes pour aider les
                                utilisateurs à faire de l&apos;exercice de manière autonome.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                Quels types d&apos;exercices le robot peut-il aider à réaliser?
                            </AccordionTrigger>
                            <AccordionContent>
                                Le robot peut aider à réaliser une variété d&apos;exercices, y compris des entraînements
                                cardiovasculaires, de musculation, et plus encore.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Le robot s&apos;adapte-t-il aux besoins individuels des utilisateurs?
                            </AccordionTrigger>
                            <AccordionContent>
                                Oui, le robot peut être programmé pour s&apos;adapter aux besoins et aux niveaux de
                                fitness individuels des utilisateurs.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Quelles sont les fonctionnalités de sécurité intégrées?</AccordionTrigger>
                            <AccordionContent>
                                Le robot est équipé de fonctionnalités de sécurité telles que l&apos;arrêt automatique
                                en cas d&apos;urgence et la détection d&apos;obstacles pour éviter les collisions.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>
                                Est-ce que le robot peut être utilisé par des personnes de tous âges?
                            </AccordionTrigger>
                            <AccordionContent>
                                Oui, le robot de sport autonome est conçu pour être utilisé par des personnes de tous
                                âges et niveaux de condition physique.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>
                                Peut-on personnaliser les séances d&apos;entraînement avec le robot?
                            </AccordionTrigger>
                            <AccordionContent>
                                Oui, les utilisateurs peuvent personnaliser leurs séances d&apos;entraînement en
                                fonction de leurs objectifs et préférences.
                            </AccordionContent>
                        </AccordionItem>
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
