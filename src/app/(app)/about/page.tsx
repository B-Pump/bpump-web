"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

import { LayoutGrid } from "@/components/aceternity/layout-grid";
import { Tooltip } from "@/components/aceternity/tooltip";
import { WobbleCard } from "@/components/aceternity/wobble-card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { buttonVariants } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function About() {
    const people = [
        {
            id: 1,
            name: "Pierre H.",
            designation: "Programmation - Montage vidéo",
            image: "/image/team/pierre.png",
        },
        {
            id: 2,
            name: "Auguste G.",
            designation: "Programmation - Design",
            image: "/image/team/auguste.png",
        },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation - Mécanique",
            image: "/image/team/galaad.png",
        },
        {
            id: 4,
            name: "Emma B.",
            designation: "Design",
            image: "/image/team/emma.png",
        },
        {
            id: 5,
            name: "Nathan C.",
            designation: "Programmation - Physique",
            image: "/image/team/nathan.jpg",
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
                    <p className="text-4xl font-bold text-white">Première utilisation du Raspberry</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Nous avons testé le bon fonctionnement de la caméra sur le Raspberry et la réaction de l&apos;IA face à un
                        environnement moins performant que sur nos propres ordinateurs.
                    </p>
                </div>
            ),
            className: "col-span-1",
            thumbnail: "/image/work/raspberry.png",
        },
        {
            id: 3,
            content: (
                <div>
                    <p className="text-4xl font-bold text-white">Auguste, travaillant sur le vidéo projecteur</p>
                    <p className="my-4 max-w-lg text-base font-normal text-neutral-200">
                        Nous avons été amené à démonter le vidéo projecteur afin de mieux comprendre son fonctionnement et de
                        pouvoir connecter le bouton d&apos;allumage au raspberry.
                    </p>
                </div>
            ),
            className: "col-span-1",
            thumbnail: "/image/work/videoproj.png",
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
            href: "https://instagram.com/b.pump76",
        },
        {
            title: "YouTube",
            href: "https://youtube.com/@b-pump",
        },
        {
            title: "GitHub",
            href: "https://github.com/B-Pump",
        },
    ];

    const videos = [{ file: "ia" }, { file: "app" }];

    const cinematic = [
        {
            image: "cinematic1.svg",
            desc: "Schéma cinématique de notre système pour orienter le vidéo projecteur (fonctionnalité abandonnée).",
        },
        {
            image: "cinematic2.svg",
            desc: "Schéma cinématique de notre système pour orienter le vidéo projecteur (fonctionnalité abandonnée).",
        },
    ];
    const blueprint = [
        {
            image: "back.png",
            desc: "Bonjour",
        },
        {
            image: "front.png",
            desc: "Bonjour",
        },
        {
            image: "side.png",
            desc: "Bonjour",
        },
        {
            image: "back_composant.png",
            desc: "Bonjour",
        },
        {
            image: "front_composant.png",
            desc: "Bonjour",
        },
        {
            image: "side_composant.png",
            desc: "Bonjour",
        },
    ];

    return (
        <section className="my-10">
            <div className="container">
                <div className="flex flex-col justify-center gap-8">
                    <h1 className="bg-clip-text text-center text-3xl font-bold leading-normal md:text-4xl xl:text-5xl 2xl:text-6xl">
                        Un projet créé pour des Olympiades avec{" "}
                        <span className="text-primary">
                            passion & performance{" "}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <button>🦾</button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogHeader>Vous savez quoi ?</AlertDialogHeader>
                                        <AlertDialogDescription>
                                            La musique utilisée pour le développement de notre projet est assez spéciale... On
                                            vous laisse l&apos;écouter :
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <iframe
                                        className="rounded-xl"
                                        src="https://open.spotify.com/embed/playlist/3WS804z70NuFS17SK4JE4R?utm_source=generator"
                                        width="100%"
                                        height="352"
                                        loading="lazy"
                                    />
                                    <AlertDialogFooter>
                                        <AlertDialogAction>Compris !</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </span>
                    </h1>
                    <div className="flex flex-col gap-5">
                        <p className="text-center text-muted-foreground">
                            Conçu par une équipe d&apos;élèves de Terminale du lycée Galilée à Franqueville St. Pierre
                        </p>
                        <div className="flex w-full flex-row items-center justify-center">
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
                <div className="flex max-w-7xl flex-col gap-10 pb-10">
                    {content.map((item, index: number) => (
                        <div className="flex flex-col gap-3" key={index}>
                            <h2 className="text-3xl font-medium">{item.title}</h2>
                            <p className="text-lg">{item.content}</p>
                        </div>
                    ))}
                </div>
                <div className="h-screen pb-10">
                    <LayoutGrid cards={cards} />
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="flex max-w-7xl flex-col gap-3">
                        <h3 className="text-xl font-medium">
                            Nous avons appliqué la démarche des Sciences Industrielles de l&apos;Ingénieur.
                        </h3>
                        <p>
                            Dans le cadre de notre projet, nous avons suivi une démarche rigoureuse et structurée, inspirée des
                            méthodes de travail des ingénieurs professionnels. Notre objectif était de concevoir un produit
                            innovant, fiable et répondant aux besoins de nos utilisateurs, tout en respectant{" "}
                            <span className="text-primary">les normes et les standards de l&apos;industrie</span>.
                        </p>
                        <p>
                            Pour ce faire, nous avons commencé par définir <span className="text-primary">les exigences</span> de
                            notre projet, en identifiant les fonctions principales que notre produit devait remplir. Nous avons
                            ensuite élaboré un{" "}
                            <Link href={"https://urlz.fr/qBRn"} target="_blank" className="text-primary underline">
                                cahier des charges
                            </Link>{" "}
                            détaillé, qui décrit les spécifications techniques, fonctionnelles et ergonomiques de notre solution.
                            Ce document nous a servi de guide tout au long du projet.
                        </p>
                        <div>
                            <Image
                                src="/svg/requirements.svg"
                                alt="Diagramme des exigences"
                                height={1000}
                                width={1000}
                                className="rounded-xl border p-2"
                            />
                            <p className="text-sm italic">Diagramme des exigences du système.</p>
                        </div>
                        <p>
                            En parallèle, nous avons réalisé des <span className="text-primary">schémas cinématiques</span>, qui
                            nous ont aidés à visualiser le fonctionnement de notre produit. Cela nous a également permis de
                            détecter les éventuels problèmes ou contraintes techniques, et de trouver des solutions adaptées.
                        </p>
                        <div>
                            <Carousel plugins={[Autoplay({ delay: 5000 })]} opts={{ loop: true }}>
                                <CarouselContent>
                                    {cinematic.map((item: { image: string; desc: string }, index: number) => (
                                        <CarouselItem key={index}>
                                            <Image
                                                src={`/svg/cinematic/${item.image}`}
                                                alt="Diagramme des exigences"
                                                height={1200}
                                                width={1200}
                                                className="rounded-xl border"
                                            />
                                            <p className="text-sm italic">{item.desc}</p>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="flex max-w-7xl flex-col gap-3">
                        <h3 className="text-xl font-medium">Notre projet est pluri-disciplinaire.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aliquid modi explicabo,
                            consectetur alias dolorum dolorem harum at voluptatibus aut, fugit facilis unde voluptatem! Fugiat
                            autem unde sapiente ab. Corrupti officiis sunt animi cum adipisci totam excepturi eius! Voluptate quis
                            soluta facere qui, odio expedita consectetur doloremque voluptatum minima nobis cumque vero quam. Quos
                            esse dolores exercitationem, iste ratione assumenda beatae modi nesciunt atque hic odit debitis neque
                            obcaecati vero molestiae dolorem ipsam dolore corrupti repellat minus ut? Omnis cupiditate aliquam et
                            doloremque impedit, nihil sequi ab.
                        </p>
                        <div>
                            <Image src="https://i.imgur.com/RcjG7IK.png" alt="Diagramme des exigences" height={500} width={500} />
                            <p className="text-sm italic">Graphique représentatif de la pluri-disciplinarité du projet.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="flex max-w-7xl flex-col gap-3">
                        <h3 className="text-xl font-medium">Un design soigné</h3>
                        <p>
                            Nous avons fait l&apos;effort pour chaque parties du projet à marquer le côté esthétique. Le design du
                            robot et le placement de chaque composant à l&apos;intérieur de ce dernier est réfléchi.
                        </p>
                        <div>
                            <Carousel plugins={[AutoScroll({ speed: 0.5 })]} opts={{ loop: true, dragFree: true }}>
                                <CarouselContent>
                                    {blueprint.map((item: { image: string; desc: string }, index: number) => (
                                        <CarouselItem className="basis-1/3" key={index}>
                                            <Image
                                                src={`/image/blueprint/${item.image}`}
                                                alt="Diagramme des exigences"
                                                height={500}
                                                width={500}
                                                className="rounded-xl border"
                                            />
                                            <p className="text-sm italic">{item.desc}</p>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 pb-10">
                    <h3 className="text-xl font-medium">
                        Nous avons eu l&apos;occasion de réaliser plusieurs vidéos de promotion et de présentation de notre
                        projet.
                    </h3>
                    <div className="grid grid-cols-1 grid-rows-2 gap-4 lg:grid-cols-2 lg:grid-rows-1">
                        {videos.map((item: { file: string }, index: number) => (
                            <video
                                controls
                                className="rounded-xl border"
                                poster={`/video/about/poster/${item.file}.png`}
                                key={index}
                            >
                                <source src={`/video/about/${item.file}.mp4`} type="video/mp4" />
                                Votre naviguateur n&apos;arrive pas à afficher cette vidéo...
                            </video>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-8 pb-10">
                    <div className="flex max-w-7xl flex-col gap-3">
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
                            <span className="text-primary">visiter nos repository</span>. Nous accueillons également les &quot;
                            <span className="text-primary">Issues</span>&quot;, alors n&apos;hésitez pas à nous{" "}
                            <span className="text-primary">rapporter des problèmes ou des conseils</span> si vous avez des idées
                            ou des améliorations à suggérer.
                        </p>
                        <p>Rejoignez-nous dès maintenant pour suivre notre parcours !</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        {socials.map((item: { title: string; href: string }, index: number) => (
                            <Link href={item.href} target="_blank" className={buttonVariants()} key={index}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-lg">
                        Pour plus d&apos;informations sur le produit en général, consultez notre{" "}
                        <Link href="/faq" className="underline">
                            Foire aux Questions
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
}
