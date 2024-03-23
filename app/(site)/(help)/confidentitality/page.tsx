export default function Confidentiality() {
    const articles = [
        {
            title: "Collecte d'informations",
            content:
                "Nous accordons une grande importance à la confidentialité de vos données personnelles. Cette politique de confidentialité décrit comment B-Pump recueille, utilise et protège vos informations lorsque vous utilisez notre site Web. Lorsque vous utilisez notre site Web, nous pouvons collecter certaines informations personnelles vous concernant, telles que votre nom, votre adresse e-mail et votre adresse IP. Ces informations sont utilisées pour améliorer votre expérience utilisateur et pour répondre à vos demandes. Nous ne vendrons, ne partagerons ni ne louerons jamais vos informations personnelles à des tiers sans votre consentement préalable. Nous utilisons des mesures de sécurité strictes pour protéger vos informations contre tout accès non autorisé. Si vous avez des questions concernant notre politique de confidentialité, veuillez nous contacter.",
        },
        {
            title: "Cookies et Liens externes",
            content:
                "Cookies :\nNotre site Web utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte placés sur votre ordinateur pour collecter des informations standard de journal Internet et de comportement des visiteurs. Vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre site Web.\n\nLiens vers d'autres sites Web :\nNotre site Web peut contenir des liens vers d'autres sites Web. Veuillez noter que nous n'avons aucun contrôle sur ces sites et que nous ne sommes pas responsables de leur contenu ou de leurs pratiques en matière de confidentialité. Nous vous encourageons à lire les politiques de confidentialité de ces sites avant de fournir vos informations personnelles.\n\nModifications de la politique de confidentialité :\nNous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Veuillez consulter régulièrement cette page pour rester informé de toute mise à jour.",
        },
        // Ajoutez d'autres articles de politique de confidentialité selon vos besoins
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="container w-full pt-6">
                <h1 className="mb-10 text-center text-5xl font-bold">Politique de Confidentialité B-Pump</h1>
                <div className="flex flex-col space-y-8">
                    {articles.map((article, index) => (
                        <div key={index} className="rounded-lg border border-gray-300 p-6">
                            <h2 className="mb-4 text-3xl font-bold">{article.title}</h2>
                            <p className="text-lg">{article.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
