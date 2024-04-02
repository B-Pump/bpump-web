"use client";

import Image from "next/image";
import Link from "next/link";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeroGeminiEffect } from "@/components/ui/gemini";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";

export default function Home() {
    const projects = [
        {
            title: "Intelligence artificielle",
            description:
                "Nous utilisons la dernière technologie d'IA de Google afin de détecter le positionnement de votre corps et mieux vous acompagner lors de vos exercices.",
            link: "https://developers.google.com/mediapipe",
        },
        {
            title: "Technologies innovantes",
            description:
                "Notre robot contient les dernières technologies en terme de vision ordinateur pour vous aider à obtenir un entrainement aussi efficace que possible.",
            link: "./about",
        },
        {
            title: "Expérience utilisateur",
            description:
                "Notre projet s'adapte à votre profil unique pour vous aider à obtenir l'entrainement qui vous convient le mieux. B-Pump fait tout cela en respectant votre vie privée, ne transmettant aucune information à des tiers",
            link: "./onboarding",
        },
    ];

    const testimonials = [
        {
            title: "Étudiante",
            quote: "Ce projet a révolutionné ma routine d'entraînement. C'est comme avoir un coach personnel 24/7. J'adore la manière dont il ajuste les exercices en fonction de mes progrès. Une vraie percée technologique !",
            name: "Sophie, 20 ans",
        },
        {
            title: "Lycéen passionné de sport",
            quote: "Ce robot sportif autonome m'a impressionné par sa précision et sa capacité à simuler des situations réelles. C'est comme avoir un partenaire d'entraînement qui ne fatigue jamais. Parfait pour rester en forme !",
            name: "Alexandre, 17 ans",
        },
        {
            title: "Amatrice de technologie",
            quote: "Je suis bluffé par la performance de B-Pump. Il offre une variété d'activités, s'adapte à mon niveau de condition physique et motive constamment. Un investissement qui vaut vraiment la peine !",
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
        <section className="grid items-center gap-6">
            <HeroGeminiEffect />
            <div id="startPage" className="container">
                <div className="mx-auto -mt-32 max-w-5xl px-8 md:mt-auto ">
                    <HoverEffect items={projects} />
                </div>
                <div className="flex justify-center">
                    <div className="max-w-5xl py-20 text-center">
                        <h1 className="pb-5 text-4xl font-bold">C&apos;est quoi B-Pump ?</h1>
                        <p className="text-xl font-light leading-loose tracking-normal text-neutral-300">
                            B-Pump est un coach sportif intelligent, fait pour t&apos;aider à réaliser tes entrainements sportifs le plus efficacement
                            possible. Ce coach virtuel combine habilement la vision machine et l&apos;intelligence artificielle pour offrir une
                            expérience d&apos;entraînement <b className="font-bold text-primary">révolutionnaire</b>. Notre système repose sur la
                            puissance de la vision par ordinateur pour <b className="font-bold text-primary">analyser en temps réel</b> les mouvements
                            des sportifs. Grâce à des algorithmes avancés, nous sommes en mesure de détecter les moindres détails et nuances dans la
                            gestuelle des athlètes, offrant ainsi une analyse précise et approfondie de leurs performances. L&apos;intelligence
                            artificielle intégrée à notre coach robotique assure <b className="font-bold text-primary">un suivi personnalisé</b> et
                            adaptatif de l&apos;entraînement. En analysant les données de mouvement recueillies par la vision machine, notre système
                            est capable de fournir des conseils individualisés et des recommandations d&apos;
                            <b className="font-bold text-primary">entraînement sur mesure</b>. Que ce soit pour corriger leur technique, compter les
                            calories ou maximiser les résultats, notre coach virtuel est là pour guider et soutenir les sportifs à chaque étape de
                            leur parcours. B-pump offre aux sportifs un outil puissant pour améliorer leurs performances et atteindre leurs objectifs.
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <Link href="/">
                    <Image
                        alt="Télécharger l'application pour Android"
                        src="https://play.google.com/intl/fr_FR/badges/static/images/badges/fr_badge_web_generic.png"
                        style={{ width: "auto", height: "auto" }}
                        width={150}
                        height={150}
                    />
                </Link>
            </div>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <InfiniteMovingCards items={testimonials} />
            </div>
        </section>
    );
}
