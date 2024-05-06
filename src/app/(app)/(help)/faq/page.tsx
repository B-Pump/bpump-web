"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqItem = {
    title: string;
    content: AccordionItem[];
};

export default function Faq() {
    const faq: FaqItem[] = [
        {
            title: "Questions générales",
            content: [
                {
                    title: "Qui sont les membres de l'équipe derrière le projet B-Pump ?",
                    content:
                        "Nous sommes 5 lycéens passionnés par le monde de la technologie ayant pour objectif de réaliser un projet sur le thème du sport dans le cadre des Olympiades des Sciences de l'Ingénieur 2024.",
                },
                {
                    title: "Quel est le rôle de chacun des membres dans le projet B-Pump ?",
                    content: "De manière globale, nous sommes 4 développeurs et 1 designeuse.",
                },
                {
                    title: "Quels sont les objectifs principaux du projet B-Pump ?",
                    content:
                        "L'objectif de ce projet est de permettre à chacun de faire du sport depuis la maison ou même en extérieur avec un assistant personnel.",
                },
            ],
        },
        {
            title: "Questions sur l'application mobile",
            content: [
                {
                    title: "Quelles sont les spécifications techniques de l'application mobile ?",
                    content:
                        "L'application utilise les dernières technologies React afin de garantir une interface utilisateur optimale.",
                },
                {
                    title: "Quelles fonctionnalités sont disponibles dans l'application mobile ?",
                    content:
                        "L'application vous permet de lancer des exercices et de créer vos propres programmes de sport à partir de notre catalogue d'exercices.",
                },
                {
                    title: "Comment l'application mobile interagit-elle avec le robot ?",
                    content:
                        "L'application se connecte au robot via WiFi. Nous utilisons un service de tunneling donc vous n'êtes pas obligé d'être connecté au même wifi que votre robot.",
                },
            ],
        },
        {
            title: "Questions sur l'intelligence artificielle utilisée",
            content: [
                {
                    title: "Quel type d'IA est utilisé ?",
                    content: "Nous utilisons le modèle Mediapipe de Google.",
                },
                {
                    title: "Comment l'IA contribue-t-elle aux fonctionnalités du robot ?",
                    content:
                        "L'IA permet au robot de calculer les angles entre deux de vos membres afin de détecter votre positionnement et ainsi vous proposer une correction personnalisée en fonction de votre posture.",
                },
                {
                    title: "Quels sont les avantages de l'IA dans le contexte du projet ?",
                    content: "Cela permet au robot d'être plus efficace en termes de correction visuelle.",
                },
            ],
        },
        {
            title: "Questions sur le fonctionnement du robot",
            content: [
                {
                    title: "Comment fonctionne le robot ?",
                    content:
                        "Le robot reçoit d'abord les données sur l'exercice que vous souhaitez faire, il démarre ensuite la reconnaissance de votre posture via la caméra et vous propose une correction audible et adaptée au mouvement que vous effectuez.",
                },
                {
                    title: "Quelles sont les capacités de détection de mouvement du robot ?",
                    content:
                        "Le robot détecte tous les mouvements de votre corps et saura se focaliser sur le plus important en fonction de l'exercice que vous aurez choisi.",
                },
                {
                    title: "Comment le robot ajuste-t-il son assistance en fonction des besoins de l'utilisateur ?",
                    content:
                        "En fonction de l'angle entre deux de vos membres, le robot pourra calculer si votre mouvement est mal réalisé ou non. Il pourra donc par la suite proposer son assistance oralement.",
                },
            ],
        },
        {
            title: "Questions sur la sécurité",
            content: [
                {
                    title: "Quelles mesures de sécurité sont mises en place pour assurer l'utilisation sûre du robot ?",
                    content:
                        "Le robot est immobile et ne vous causera donc pas de problème lorsque vous ne l'utilisez pas. De plus, la caméra est active uniquement lorsque vous lancez un exercice depuis l'application mobile.",
                },
                {
                    title: "Comment B-Pump protège-t-il les données utilisateur et la vie privée ?",
                    content:
                        "Vous avez la possibilité de supprimer toutes vos données en supprimant votre compte depuis le site ou depuis l'application mobile. Nous gardons uniquement des statistiques pouvant vous permettre de garder un œil sur votre progression.",
                },
                {
                    title: "Quels sont les protocoles de sécurité intégrés dans l'application mobile ?",
                    content:
                        "Le mot de passe de votre compte n'est jamais enregistré 'tel quel' dans notre base de données ; il est crypté de bout en bout.",
                },
            ],
        },
        {
            title: "Questions sur la disponibilité du produit",
            content: [
                {
                    title: "Quand le robot sera-t-il disponible sur le marché ?",
                    content:
                        "Ce robot n'est pas destiné à la vente pour le moment car il s'agit uniquement d'un projet réalisé dans le cadre des Olympiades des Sciences de l'Ingénieur 2024.",
                },
                {
                    title: "Dans quels pays l'application mobile de B-Pump sera-t-elle disponible ?",
                    content: "L'application est disponible dans toute la France.",
                },
                {
                    title: "Y aura-t-il des versions bêta ou des tests pour B-Pump avant sa sortie officielle ?",
                    content: "Vous pouvez nous contacter via Instagram pour faire partie des testeurs.",
                },
            ],
        },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10">
                <h1 className="text-5xl font-bold">Foire aux Questions</h1>
                <div>
                    {faq.map((item: FaqItem, index: number) => (
                        <div key={index}>
                            <h1 className="pt-16 text-3xl font-bold">{item.title}</h1>
                            <Accordion type="single" collapsible className="m-2 w-full">
                                {item.content.map((item: AccordionItem, index: number) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>{item.content}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
