"use client";

import Image from "next/image";

import { LayoutGrid } from "@/components/aceternity/layout-grid";
import { Tooltip } from "@/components/aceternity/tooltip";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
    const people = [
        {
            id: 1,
            name: "Pierre H.",
            designation: "Programmation - Montage vidéo",
            image: "https://i.imgur.com/YPmxG4Y.jpeg",
        },
        {
            id: 2,
            name: "Auguste G.",
            designation: "Programmation - Design",
            image: "https://i.imgur.com/YPmxG4Y.jpeg",
        },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation - Mécanique",
            image: "https://i.imgur.com/YPmxG4Y.jpeg",
        },
        {
            id: 4,
            name: "Emma B.",
            designation: "Design",
            image: "https://i.imgur.com/YPmxG4Y.jpeg",
        },
        {
            id: 5,
            name: "Nathan C.",
            designation: "Programmation - Physique",
            image: "https://i.imgur.com/YPmxG4Y.jpeg",
        },
    ];

    const cards = [
        {
            id: 1,
            content: (
                <div>
                    <p className="text-4xl font-bold text-white">Bonjour</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex totam dolore, vitae aut culpa impedit
                        ducimus laborum.
                    </p>
                </div>
            ),
            className: "md:col-span-2",
            thumbnail:
                "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            content: (
                <div>
                    <p className="text-4xl font-bold text-white">Bonjour</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex totam dolore, vitae aut culpa impedit
                        ducimus laborum.
                    </p>
                </div>
            ),
            className: "col-span-1",
            thumbnail:
                "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            content: (
                <div>
                    <p className="text-4xl font-bold text-white">Bonjour</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex totam dolore, vitae aut culpa impedit
                        ducimus laborum.
                    </p>
                </div>
            ),
            className: "col-span-1",
            thumbnail:
                "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            content: (
                <div>
                    <p className="text-4xl font-bold text-white">Bonjour</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ex totam dolore, vitae aut culpa impedit
                        ducimus laborum.
                    </p>
                </div>
            ),
            className: "md:col-span-2",
            thumbnail:
                "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const content = [
        {
            title: "Notre histoire",
            content:
                "Tout a commencé lorsque notre équipe de passionnés de technologie et de sport s'est réunie au lycée. Nous avons identifié un besoin commun : rendre la pratique sportive accessible à tous, peu importe l'endroit. C'est ainsi qu'est né notre projet B-Pump, un robot intelligent conçu pour corriger les mouvements de sport, compter le nombre de répétitions et fournir des statistiques sur la progression de l'utilisateur.",
        },
        {
            title: "Qui nous servons",
            content:
                "Notre projet s'adresse à tous ceux qui souhaitent améliorer leur pratique sportive, qu'ils soient débutants ou confirmés. B-pump offre une solution innovante pour ceux qui cherchent à s'entraîner de manière autonome, tout en bénéficiant de corrections et de conseils personnalisés.",
        },
        {
            title: "Comment nous fonctionnons",
            content:
                "Notre projet est divisé en plusieurs parties, chacune répondant à un besoin spécifique : partie informatique (programme du robot, site web, application, API), partie physique mécanique (calculs statistiques), et partie électronique (branchements, GPIO). Nous avons conçu B-pump de manière à respecter au mieux les conventions du monde professionnel.",
        },
        {
            title: "Un projet innovant",
            content:
                "Notre projet est innovant car il combine plusieurs technologies de pointe pour offrir une expérience utilisateur unique et personnalisée. Tout d'abord, notre robot utilise l'IA MediaPipe, entraînée par Google, pour reconnaître et suivre les mouvements de l'utilisateur en temps réel, ce qui permet une analyse précise de la posture et des mouvements. Ensuite, notre application mobile et notre site web offrent une interface utilisateur intuitive et conviviale, permettant à l'utilisateur de choisir les exercices et les programmes qui conviennent le mieux à ses besoins et à ses objectifs. Enfin, notre robot est équipé d'un vidéoprojecteur intégré pour afficher des instructions et des feedbacks visuels en temps réel, ce qui améliore l'expérience utilisateur et facilite la compréhension des exercices.",
        },
    ];

    const socials = [
        {
            title: "Instagram",
            href: "https://www.instagram.com/b.pump76",
        },
        {
            title: "YouTube",
            href: "https://www.youtube.com/@b-pump",
        },
        {
            title: "GitHub",
            href: "https://github.com/B-Pump",
        },
    ];

    return (
        <section className="my-10">
            <div className="container">
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="text-center text-6xl font-bold leading-normal">
                        Un projet créé pour des Olympiades avec
                        <span className="text-primary"> passion & performance 🦾</span>
                    </h1>
                    <div className="flex flex-col gap-5">
                        <p className="text-center text-muted-foreground">
                            Conçu par une équipe d&apos;élèves de Terminale du lycée Galilée à Franqueville St. Pierre
                        </p>
                        <div className="mb-10 flex w-full flex-row items-center justify-center">
                            <Tooltip items={people} />
                        </div>
                    </div>
                </div>
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 py-10 lg:grid-cols-3">
                    <WobbleCard containerClassName="col-span-1 lg:col-span-2 bg-secondary h-full min-h-[500px] lg:min-h-[300px]">
                        <div className="max-w-xs">
                            <h2 className="text-balance text-left text-base font-semibold tracking-[-0.015em] md:text-xl lg:text-3xl">
                                Un projet Olympique...
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-muted-foreground">
                                B-Pump a été réalisé dans le cadre des Olympiades des Sciences de l&apos;Ingénieur des lycéees
                            </p>
                        </div>
                        <Image
                            src="/image/logo.png"
                            alt="Logo B-Pump"
                            width={500}
                            height={500}
                            className="absolute -bottom-10 right-[-10%] rounded-2xl object-contain lg:top-[-30%]"
                        />
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 bg-black dark:bg-card min-h-[300px]">
                        <h2 className="max-w-80 text-balance text-left text-base font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
                            ...De grandes ambitions...
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-white/95">
                            B-Pump a été fait dans le but d&apos;exister au delà d&apos;un simple projet d&apos;Olympiades
                        </p>
                    </WobbleCard>
                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-muted-foreground min-h-[500px] lg:min-h-[300px]">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm text-balance text-left text-base font-semibold tracking-[-0.015em] text-accent md:max-w-lg md:text-xl lg:text-3xl">
                                ...Une équipe de lycéens
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-muted">
                                B-Pump a été entiérement réalisé par une équipe de terminales au Lycée Galilée
                            </p>
                        </div>
                        <Image
                            src="/image/lycee.jpg"
                            alt="Lycée Galilée"
                            width={500}
                            height={500}
                            className="absolute -bottom-10 -right-32 rounded-2xl object-contain lg:-right-10 lg:top-[10%]"
                        />
                    </WobbleCard>
                </div>
                <div className="mx-16 flex max-w-7xl flex-col gap-10">
                    {content.map((item, index: number) => (
                        <div className="flex flex-col gap-3" key={index}>
                            <h2 className="text-3xl font-medium">{item.title}</h2>
                            <p className="text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="h-screen">
                    <LayoutGrid cards={cards} />
                </div>
                <div className="mx-16 flex flex-col gap-8">
                    <div className="flex max-w-7xl flex-col gap-5">
                        <p>
                            Suivez-nous sur nos <span className="text-primary">réseaux sociaux</span> pour être tenu au courant
                            des dernières avancées de notre projet ! Nous partageons régulièrement{" "}
                            <span className="text-primary">des mises à jour, des photos et des vidéos</span> de notre travail en
                            cours. Vous pouvez nous trouver sur <span className="text-primary">Instagram et YouTube</span>.
                        </p>
                        <p>
                            De plus, nous sommes fiers de dire que notre code est entièrement{" "}
                            <span className="text-primary">open source</span> et disponible sur{" "}
                            <span className="text-primary">GitHub</span>. Si vous êtes intéressé par le développement de notre
                            projet ou si vous souhaitez simplement jeter un coup d&apos;oeil à notre code, n&apos;hésitez pas à{" "}
                            <span className="text-primary">visiter nos repository</span>. Nous accueillons également les
                            <span className="text-primary">&quot;Issues&quot;</span>, alors n&apos;hésitez pas à nous{" "}
                            <span className="text-primary">rapporter des problèmes ou des conseils</span> si vous avez des idées
                            ou des améliorations à suggérer.
                        </p>
                        <p>
                            Rejoignez-nous dès maintenant pour suivre notre parcours et faire partie de notre communauté en pleine
                            croissance !
                        </p>
                    </div>
                    <div className="flex gap-3">
                        {socials.map((item, index: number) => (
                            <Link href={item.href} target="_blank" className={buttonVariants({})} key={index}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
