"use client";

export default function ConditionsOfUse() {
    const articles: AccordionItem[] = [
        {
            title: "Acceptation des conditions d'utilisation",
            content:
                "En utilisant l'application mobile de B-Pump ou tout service fourni par B-Pump, vous acceptez d'être lié par ces Conditions d'Utilisation. Si vous n'acceptez pas ces Termes, veuillez ne pas utiliser l'application ou les services de B-Pump.",
        },
        {
            title: "Utilisation autorisée",
            content:
                "Vous acceptez d'utiliser l'application B-Pump uniquement à des fins légales et conformément à ces Termes. Vous ne devez pas utiliser l'application d'une manière qui pourrait endommager, désactiver, surcharger ou nuire à B-Pump ou à tout autre utilisateur.",
        },
        {
            title: "Compte utilisateur",
            content:
                "Pour accéder à certaines fonctionnalités de B-Pump, vous devrez peut-être créer un compte utilisateur. Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion et de toutes les activités qui se produisent sous votre compte.",
        },
        {
            title: "Propriété intellectuelle",
            content:
                "B-Pump détient tous les droits de propriété intellectuelle relatifs à l'application, y compris les droits d'auteur, les marques commerciales et les brevets. Vous acceptez de respecter tous les droits de propriété intellectuelle de B-Pump.",
        },
        {
            title: "Limitation de responsabilité",
            content:
                "B-Pump ne peut être tenu responsable de tout dommage indirect, accessoire, spécial, consécutif ou punitif résultant de votre utilisation de l'application ou de tout service fourni par B-Pump.",
        },
        {
            title: "Modifications des termes",
            content:
                "B-Pump se réserve le droit de modifier ces Conditions d'utilisation à tout moment. Les modifications prendront effet dès leur publication sur ce site. Il est de votre responsabilité de consulter régulièrement les Conditions d'utilisation pour être informé des modifications.",
        },
        {
            title: "Résiliation",
            content:
                "B-Pump se réserve le droit de résilier ou de suspendre votre accès à l'application à tout moment, avec ou sans motif, et sans préavis ni responsabilité envers vous.",
        },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10">
                <h1 className="text-5xl font-bold">Conditions d&apos;utilisation</h1>
                <div>
                    {articles.map((item: AccordionItem, index: number) => (
                        <div key={index}>
                            <h1 className="pt-16 text-3xl font-bold">{item.title}</h1>
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
