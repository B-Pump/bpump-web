import Image from "next/image";
import Link from "next/link";

import { Gemini } from "@/components/aceternity/gemini";
import { HoverCard } from "@/components/aceternity/hover-card";
import { InfiniteMovingCards } from "@/components/aceternity/reviews-card";
import { TextGenerateEffect } from "@/components/aceternity/text-gen";

import config from "@/config.json";

export default function Home() {
    const projects = [
        {
            title: "Intelligence artificielle",
            description:
                "Nous utilisons la dernière technologie d'IA de Google afin de détecter le positionnement de votre corps et mieux vous accompagner lors de vos exercices.",
            link: "about",
        },
        {
            title: "Technologies innovantes",
            description:
                "Notre robot contient les dernières technologies en terme de vision ordinateur pour vous aider à obtenir un entrainement aussi efficace que possible.",
            link: "about",
        },
        {
            title: "Expérience utilisateur",
            description:
                "Notre projet s'adapte à votre profil unique pour vous aider à obtenir l'entrainement qui vous convient le mieux. B-Pump fait tout cela en respectant votre vie privée, ne transmettant aucune information à des tiers",
            link: "about",
        },
    ];
    const download = [
        {
            alt: "Download from Play Store",
            image: "https://play.google.com/intl/fr_FR/badges/static/images/badges/fr_badge_web_generic.png",
            link: "/",
        },
        {
            alt: "Download directly",
            image: "https://i.imgur.com/Q6Dq41s.png",
            link: "https://drive.google.com/uc?id=1YK8SgaFUKMi5J9l7Ye-VuapJAqKKIs2G&export=download",
        },
    ];

    const reviews = [
        {
            title: "Étudiante",
            quote: "Ce projet a révolutionné ma routine d'entraînement. C'est comme avoir un coach personnel 24h/24. J'adore la manière dont il ajuste les exercices en fonction de mes progrès. Une vraie percée technologique !",
            name: "Sophie, 20 ans",
        },
        {
            title: "Lycéen passionné de sport",
            quote: "Ce robot sportif autonome m'a impressionné par sa précision et sa capacité à simuler des situations réelles. C'est comme avoir un partenaire d'entraînement qui ne fatigue jamais. Parfait pour rester en forme !",
            name: "Alexandre, 17 ans",
        },
        {
            title: "Amatrice de technologie",
            quote: "Je suis bluffée par la performance de B-Pump. Il offre une variété d'activités, s'adapte à mon niveau de condition physique et motive constamment. Un investissement qui vaut vraiment la peine !",
            name: "Marie, 22 ans",
        },
        {
            title: "Technophile",
            quote: "Ce robot de sport a ajouté une dimension ludique à mon programme d'exercices. Ses fonctionnalités intelligentes et son interface conviviale en font un compagnon idéal pour rester actif et motivé.",
            name: "Antoine, 16 ans",
        },
        {
            title: "Sportive",
            quote: "En tant qu'adepte de la technologie, B-Pump a comblé toutes mes attentes. Il offre une expérience d'entraînement sans pareil, et ses capteurs intelligents font de chaque session un défi stimulant.",
            name: "Camille, 18 ans",
        },
    ];

    return (
        <section className="mb-10">
            <Gemini>
                <TextGenerateEffect
                    className="bg-clip-text text-center text-3xl font-bold md:text-4xl xl:text-5xl 2xl:text-7xl"
                    lineOne={"Un robot coach sportif autonome"}
                    lineTwo={"construit par 5 élèves de terminale"}
                />
                <p className="mx-auto mt-4 max-w-2xl text-center text-sm font-normal text-muted-foreground md:text-xl">
                    {config.sugar.description}
                </p>
            </Gemini>
            <div className="container">
                <HoverCard items={projects} />
                <div className="flex justify-center">
                    <div className="max-w-5xl py-5 text-center">
                        <h1 className="pb-5 text-4xl font-bold">C&apos;est quoi B-Pump ?</h1>
                        <p className="text-lg font-light tracking-normal text-muted-foreground md:text-xl md:leading-loose">
                            B-Pump est un coach sportif intelligent, fait pour vous aider à réaliser vos entrainements sportifs le
                            plus efficacement possible. Ce coach virtuel combine habilement la vision machine et
                            l&apos;intelligence artificielle pour offrir une expérience d&apos;entraînement{" "}
                            <b className="font-bold text-primary">révolutionnaire</b>. Notre système repose sur la puissance de la
                            vision par ordinateur pour <b className="font-bold text-primary">analyser en temps réel</b> vos
                            mouvements. Grâce à des algorithmes avancés, nous sommes en mesure de détecter les moindres détails et
                            nuances dans votre gestuelle, offrant ainsi une analyse précise et approfondie de vos performances.
                            L&apos;intelligence artificielle intégrée à notre coach robotique assure{" "}
                            <b className="font-bold text-primary">un suivi personnalisé</b> et adaptatif de votre entraînement. En
                            analysant les données de mouvement recueillies par la vision machine, notre système est capable de
                            fournir des conseils individualisés et des recommandations d&apos;
                            <b className="font-bold text-primary">entraînement sur mesure</b>. Que ce soit pour corriger vos
                            techniques ou maximiser les résultats, notre coach virtuel est là pour vous guider et vous soutenir à
                            chaque étape de votre parcours. B-pump vous offre ainsi un outil puissant pour améliorer vos
                            performances et atteindre vos objectifs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
                {download.map((item, index: number) => (
                    <Link href={item.link} key={index}>
                        <Image
                            src={item.image}
                            alt={item.alt}
                            style={{ width: "auto", height: "auto" }}
                            width={150}
                            height={150}
                        />
                    </Link>
                ))}
            </div>
            <InfiniteMovingCards items={reviews} />
        </section>
    );
}
