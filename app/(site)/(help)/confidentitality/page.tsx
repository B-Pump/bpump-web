"use client";

type ConfidentialityItem = {
    title: string;
    content: string;
};

export default function Confidentiality() {
    const confidentiality: ConfidentialityItem[] = [
        {
            title: "Informations collectées",
            content:
                "B-Pump peut collecter des informations personnelles identifiables telle que votre nom lorsque vous utilisez notre application ou nos services. Nous pouvons également collecter des informations non personnelles telles que des données d'utilisation anonymisées.",
        },
        {
            title: "Utilisation des informations",
            content:
                "Nous utilisons les informations collectées pour fournir, maintenir et améliorer nos services, répondre à vos demandes, personnaliser votre expérience utilisateur et communiquer avec vous. Nous ne partagerons vos informations personnelles avec des tiers qu'avec votre consentement ou dans les circonstances prévues par la loi.",
        },
        {
            title: "Protection des informations",
            content:
                "B-Pump prend des mesures de sécurité appropriées pour protéger vos informations personnelles contre tout accès non autorisé, divulgation, altération ou destruction. Cependant, veuillez noter qu'aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.",
        },
        {
            title: "Cookies",
            content: "Nous n'utilisons pas de cookies pour vous tracer.",
        },
        {
            title: "Accès et contrôle de vos informations",
            content:
                "Vous pouvez accéder ou supprimer vos informations personnelles en vous connectant à votre compte utilisateur sur le site B-Pump. Vous pouvez également demander à supprimer votre compte ce qui supprimera l'entièreté de vos données de notre base de donnée.",
        },
        {
            title: "Modifications de la politique",
            content:
                "B-Pump se réserve le droit de modifier cette Politique de confidentialité à tout moment. Les modifications prendront effet dès leur publication sur l'application. Il est de votre responsabilité de consulter régulièrement la Politique de confidentialité pour être informé des modifications.",
        },
        {
            title: "Contactez-nous",
            content:
                "Si vous avez des questions concernant cette Politique de Confidentialité, veuillez nous contacter depuis la page 'Contact' ou bien à l'adresse mail suivante : b.pump.project@gmail.com",
        },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="container pt-6 md:py-10">
                <h1 className="text-5xl font-bold">Politique de confidentialité</h1>
                <div>
                    {confidentiality.map((item: ConfidentialityItem, index: number) => (
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
