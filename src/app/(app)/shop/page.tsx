"use client";

import { useState } from "react";
import { toast } from "sonner";

import { Spotlight } from "@/components/aceternity/spotlight";
import { ThreeDCard } from "@/components/aceternity/threed-card";
import { Model } from "@/components/model";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { useCartStore } from "@/context/cart";
import { cn } from "@/lib/utils";

export default function Shop() {
    const { content, setContent } = useCartStore();

    const [isGrabbing, setIsGrabbing] = useState<boolean>(false);

    const accordion: AccordionItem[] = [
        {
            title: "Ordinateur intégré",
            content:
                "B-Pump est alimenté par un Rasperry Pi 4 offrant une puissance de traitement fiable pour fonctionner de manière fluide",
        },
        {
            title: "Caméra HD",
            content:
                "Équipé d'une caméra haute définition, B-Pump capture chaque mouvement avec une précision remarquable, permettant une analyse détaillée de la forme et des performances de l'utilisateur",
        },
        {
            title: "Projecteur HD",
            content:
                "Le projecteur HD offre une expérience immerssive en affichant des instructions de mouvements claires et nettes",
        },
        {
            title: "Connexion à l'application",
            content:
                "B-Pump se connecte facilement à une application dédiée, permettant aux utilisateurs de personnaliser leurs séances d'entraînement, de suivre leur progression et d'accéder à des conseils personnalisés",
        },
        {
            title: "Suivi des performances en temps réel",
            content:
                "Grâce à des capteurs avancés et à une analyse en temps réel, B-Pump surveille les performances de l'utilisateur pendant l'entraînement, fournissant des données précises sur la forme, la force et l'endurance.",
        },
        {
            title: "Gestion des temps d'entraînement",
            content:
                "B-Pump offre un chronométrage précis des performances, permettant aux utilisateurs de suivre leurs progrès et d'améliorer leur entraînement. l fournit des conseils en temps réel pour ajuster la posture et optimiser les mouvements, garantissant des séances d'entraînement efficaces et sécurisées.",
        },
    ];

    const products = [
        {
            title: "Porte clef",
            description: "Emportez l'esprit novateur de notre projet partout avec vous grâce à ce porte-clés exclusif.",
            price: 5,
            image: "https://i.imgur.com/Ld62AQI.png",
        },
        {
            title: "Figurine",
            description: "Plongez dans l'univers captivant de notre projet avec cette adorable figurine à l'effigie de B-Pump. ",
            price: 15,
            image: "https://i.imgur.com/Ld62AQI.png",
        },
        {
            title: "Casquette",
            description: "Adoptez le style unique de notre projet avec cette casquette tendance, alliant confort et élégance.",
            price: 10,
            image: "https://i.imgur.com/Ld62AQI.png",
        },
    ];

    return (
        <section className="mb-10">
            <div className="relative flex h-[30rem] w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
                <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" />
                <div>
                    <div className="relative z-10 mx-auto w-full max-w-7xl select-none p-4 pt-20 md:pt-0">
                        <h1 className="bg-clip-text text-center text-4xl font-bold md:text-7xl">
                            Procurez vous <br />
                            B-Pump
                        </h1>
                        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-muted-foreground">
                            Transformez votre routine d&apos;entraînement avec B-pump ! Atteignez vos objectifs de remise en forme
                            avec facilité et motivation. Commandez le votre dès maintenant et laissez-vous guider vers le succès !
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <a href="/contact">
                            <Button onClick={() => {}}>Acheter dès maintenant</Button>
                        </a>
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
                        {accordion.map((item: AccordionItem, index: number) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{item.title}</AccordionTrigger>
                                <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
                {products.map((item, index: number) => (
                    <div key={index}>
                        <ThreeDCard title={item.title} description={item.description} price={item.price} image={item.image}>
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    setContent((prevContent: CartItem[]): CartItem[] => [...prevContent]);
                                    toast("Panier", {
                                        description: `${item.title} ajouté au panier avec succès !`,
                                    });
                                }}
                            >
                                Ajouter au panier - {item.price} &#8364;
                            </Button>
                        </ThreeDCard>
                    </div>
                ))}
            </div>
        </section>
    );
}
