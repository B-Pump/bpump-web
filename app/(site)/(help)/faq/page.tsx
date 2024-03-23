import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Faq() {
    const faq = [
        {
            title: "Questions générales",
            content: [
                { title: "qui sont les auteurs du projet ?", reponse: "réponse questions sur la batterie1" },
                { title: "quel est le rôle de chacun des membres", reponse: "réponse questions sur la batterie2" },
                { title: "questions generales numéros 3", reponse: "réponse questions sur la batterie3" },
            ],
        },
        {
            title: "questions l'application",
            content: [
                { title: "questions les specs 1", reponse: "réponse questions sur l'application1" },
                { title: "questions les specs 2", reponse: "réponse questions sur l'application2" },
                { title: "questions les specs 3", reponse: "réponse questions sur l'application3" },
            ],
        },
        {
            title: "question sur l'ia utiliser",
            content: [
                { title: "question sur l'ia utiliser1", reponse: "réponse questions sur l'ia utiliser1" },
                { title: "question sur l'ia utiliser2", reponse: "réponse questions sur l'ia utiliser2" },
                { title: "question sur l'ia utiliser3", reponse: "réponse questions sur l'ia utiliser3" },
            ],
        },
        {
            title: "questions sur la batterie",
            content: [
                { title: "questions sur la batterie1", reponse: "réponse questions sur la batterie1" },
                { title: "questions sur la batterie2", reponse: "réponse questions sur la batterie2" },
                { title: "questions sur la batterie3", reponse: "réponse questions sur la batterie3" },
            ],
        },
    ];
    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10">
                <h1 className="mb-10 text-5xl font-bold">FAQ B-Pump</h1>
                <div className="mx-10">
                    {faq.map((item, index) => (
                        <div key={index}>
                            <h1 className="pb-6 pt-16 text-3xl font-bold md:pb-0">{item.title}</h1>
                            <Accordion type="single" collapsible className="mx-5 my-2 w-full">
                                {item.content.map((item, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>{item.reponse}</AccordionContent>
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
