"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { HeroGeminiEffect } from "@/components/ui/gemini";
import { InfiniteMovingCards } from "@/components/ui/moving-cards";

export default function Home() {
    const projects = [
        {
            title: "Intelligence artificielle",
            description:
                "Nous utilisons la dernière technologie IA de google afin de détecter le positionnement de votre corps et mieux vous acompagner lors de vos exercices.",
            link: "https://developers.google.com/mediapipe",
        },
        {
            title: "Bibliothèque d'API",
            description:
                "Maximisez l'efficacité de votre expérience avec notre API backend rapide et performante. Notre choix s'est porté sur le framework FastAPI, pour sa rapidité et sa simplicité d'utilisation.",
            link: "https://fastapi.tiangolo.com/",
        },
        {
            title: "Expérience utilisateur",
            description:
                "Nous avons intégré l'écosystème React de manière innovante pour développer notre site web et notre application. Cette approche nous permet d'offrir une expérience utilisateur fluide et optimale.",
            link: "https://react.dev/",
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
                <div className="mx-auto max-w-5xl px-8">
                    <HoverEffect items={projects} />
                </div>
                <div className="py-20">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt assumenda, repellat
                        corrupti distinctio atque officia minus officiis, aliquid odit nihil. Esse quia magnam dolorum
                        voluptates cupiditate illo, blanditiis iste fuga iure autem quasi fugiat? Non laudantium animi
                        at tempore! Sit unde deleniti dicta aspernatur sunt, minus facere odit iste necessitatibus
                        dignissimos eius aut aperiam tempore impedit expedita incidunt totam possimus quod. Esse aliquam
                        voluptates totam. Beatae voluptatum voluptate dolore tempora. Eveniet consequuntur voluptates
                        dignissimos pariatur optio sequi temporibus nemo fuga ipsum maiores repudiandae commodi,
                        adipisci eum alias aspernatur fugit labore enim reiciendis rerum. Autem pariatur, laudantium
                        eveniet, dolorum est iusto sunt rem beatae ipsa ex ea! Unde odit animi sed, voluptate cumque,
                        assumenda ratione vel corrupti, dolorem dolores repudiandae voluptatum nostrum harum
                        exercitationem ducimus eius facere vitae odio autem sequi commodi. Delectus, aperiam nemo dolor
                        voluptas dolorem beatae corrupti tenetur explicabo quaerat suscipit labore rem magni nisi
                        aliquam! Incidunt iusto totam pariatur saepe. Et ut magni fuga consequatur commodi nostrum,
                        quasi fugiat aliquid accusantium officiis, suscipit eaque expedita maxime! Voluptate,
                        praesentium neque ut officiis earum consequuntur id sunt magnam dolorum numquam eos fugit
                        excepturi iste fuga magni! Voluptate odio quas sint quisquam voluptatibus! Aperiam dignissimos
                        atque dolores. Ut aspernatur expedita aut libero reprehenderit laudantium accusantium! Eos ad
                        odit quaerat, nostrum debitis amet nam, dolores sunt laudantium voluptatum, reiciendis laborum
                        perspiciatis voluptatibus officia natus labore repellendus tempora est! Debitis, ipsa id. Dolore
                        cumque nesciunt laboriosam tempore, debitis eius fuga laudantium! Pariatur, eveniet iste.
                        Mollitia explicabo minima veniam doloremque perferendis magni!
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased">
                <InfiniteMovingCards items={testimonials} />
            </div>
        </section>
    );
}
