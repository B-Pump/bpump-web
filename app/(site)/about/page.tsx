"use client";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Tooltip } from "@/components/ui/tooltip";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";

type ppl_detailItem = {
    name: string;
    content: string;
};

export default function About() {
    const ppl_detail: ppl_detailItem[] = [
        /*mon humble attente  de faire un tableau/const ou jsp*/
        {
            name: "Pierre H",
            content:
                "Pierre a travaillé sur le développement du site web et de l'application mobile pour notre projet. Il a créé une interface utilisateur intuitive et conviviale pour faciliter la navigation et l'utilisation de notre application pour choisir l'exercies ainsi que les programmes parfaits pour vous.",
        },
        {
            name: "Auguste G",
            content:
                "Auguste a travaillé sur la mise en place de l'IA MediaPipe, entraînée par Google, pour notre projet. Il a utilisé cette technologie pour créer des algorithmes de détection de mouvement et de reconnaissance de formes. Grâce à son travail, notre robot peut reconnaître et suivre les mouvements de l'utilisateur en temps réel.",
        },
        {
            name: "Galaad G",
            content:
                "Galaad a travaillé sur la partie électronique de notre projet, en particulier sur l'intégration du vidéoprojecteur. Il a également contribué au développement du site web en créant des fonctionnalités pour améliorer l'expérience utilisateur. il a égalemetn fais toutes l'electronique a l'interieur du robot pour le bon fontionnement du robot",
        },
        {
            name: "Emma B",
            content:
                "Emma a travaillé sur le design du robot, de l'affiche du projet et du logo. Elle a créé un design élégant et moderne pour notre robot, qui reflète parfaitement l'esprit de notre projet. Son travail sur l'affiche et le logo a contribué à créer une identité visuelle forte pour notre projet, qui se démarque des autres.",
        },
        {
            name: "Nathan C",
            content:
                "Nathan a travaillé sur le site web, mais il a particulierement briller sur la création d'un compteur de calories et d'énergie/force. Il a également contribué à l'intégration de l'IA pour notre robot. Son travail a permis d'améliorer les fonctionnalités de notre programme pour le robot et de fournir des informations utiles et pertinentes à nos utilisateurs.",
        } /* c'est moi qui est mis briller ce me faisait golri il est 4h00 ok avec la meilleur playlist pour "dev"*/,

        /*oui les content c'est du mistral pour l'instant j'ai modifier mais pour avoir une idée global*/
    ];
    const people = [
        {
            id: 1,
            name: "Pierre H.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/zxafgkb7dy1w.png",
        },
        {
            id: 2,
            name: "Auguste G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/nalmvys51hlp.jpeg",
        },
        {
            id: 3,
            name: "Galaad G.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/35zjwqvkwtk2.jpg",
        },
        {
            id: 4,
            name: "Emma B.",
            designation: "Design",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/t2z09p1bzxmx.png",
        },
        {
            id: 5,
            name: "Nathan C.",
            designation: "Programmation",
            image: "https://black_hole-3kf-1-q4182424.deta.app/api/photo/tcnrpl9x6f99.png",
        },
    ];
    const items = [
        {
            i: 1,
            title: "Une équipe de lycéens",
            description: "B-Pump a été entiérement réalisé par une équipe de terminales au Lycée Galilée",
            header: (
                <Image
                    alt="Image du lycée galilée"
                    src="https://i.imgur.com/LFcdWtd.jpeg"
                    height="0"
                    width={200}
                    className="-mb-4 h-auto w-[100%] rounded-xl"
                />
            ),
        },
        {
            i: 2,
            title: "...Un projet olympique...",
            description: "B-Pump a été réalisé dans le cadre des olympiades de science de l'ingénieur des lycéees",
            header: (
                <Image
                    alt="Logo UPSTI Olympiades de Sciences de l'ingénieur"
                    src="https://i.imgur.com/Ylv2HAZ.jpeg"
                    height="0"
                    width={200}
                    className="-mb-4 h-auto w-[100%] rounded-xl"
                />
            ),
        },
        {
            i: 3,
            title: "... Une ambition plus grande",
            description: "B-Pump a aussi été fait dans le but d'exister au delà d'un simple projet d'Olympiades",
            header: (
                <Image
                    alt="Image du lycée galilée"
                    src="https://i.imgur.com/mQYdI6C.png"
                    height="0"
                    width={200}
                    className="-mb-4 h-auto w-[100%] rounded-xl"
                />
            ),
        },
    ];

    return (
        <section className="grid items-center gap-6">
            {/*c'est jamais too much le vert me fais */}
            <div className="mx-auto h-[30rem] w-[calc(100%-4rem)]  overflow-hidden rounded-md">
                <Vortex
                    backgroundColor="" /*selection:bg-muted bg-background*/ /*jsp comment mettre la bonne couleur apres je pense que le vortex vas partir mais ozef ça m'amuse*/
                    className="flex size-full flex-col items-center justify-center px-2 py-4 md:px-10"
                >
                    <h2 className="text-center text-2xl font-bold md:text-6xl">Qu&apos;est ce que B-pump ?</h2>
                    <p className="mt-6 max-w-xl text-center text-sm md:text-2xl">
                        Nous sommes une équipe de passionnés de technologie et de sport du Lycée Galilée de Franqueville
                        Saint Pierre. Notre but? Rendre la pratique sportive accessible à tous, peu importe
                        l&apos;endroit. Découvrez notre projet et nos membres de notre équipe.
                    </p>
                    {/*j'ai enlever la couleur donc le text change bien de couleur en fonction de si c'est dark ou light them mais toujours le probleme avec le back ground ;-;*/}
                </Vortex>
            </div>
            <div className="container pt-6 md:py-10">
                <h4 className="pb-10 text-center text-2xl font-bold md:text-4xl">B-pump c&apos;est :</h4>
                <section id="tech-details">
                    <BentoGrid className="mx-auto max-w-4xl">
                        {items.map((item, i) => (
                            <BentoGridItem
                                key={i}
                                title={item.title}
                                description={item.description}
                                header={item.header}
                                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                            />
                        ))}
                    </BentoGrid>
                </section>
                <div className="py-10">
                    <h4 className="pb-10 text-center text-2xl font-bold md:text-4xl">
                        nos membres de l&apos;équipe B-pump :
                    </h4>
                    {/*plus je regarde ce que je fais plus je me dis que je devrais arrter la mdr c'est vraiment moche*/}
                    <section id="our-team">
                        <div className="mb-10 flex w-full flex-row items-center justify-center">
                            <Tooltip items={people} />
                        </div>
                    </section>
                    {/*je ne sias pas ce que je vais faire on vas voir hesite pas a corriger car ouai*/}
                    {/*voir pour rendre ca plus beau une grid ?? aceternity dois avoir des trucs cool j'ai fais la const pour voir si je y arriverai snas aide ou pas je pense que mettre une ou deux imge a coter de chauqe truc ca pourrais etre pas mal
                    je vais commit la trop tard pour moi lul*/}
                    {ppl_detail.map((item: ppl_detailItem, index: number) => (
                        <div key={index} className="text-center">
                            <h1 className="pt-16 text-3xl font-bold">{item.name}</h1>
                            <div className="m-2 w-full">
                                <p>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
