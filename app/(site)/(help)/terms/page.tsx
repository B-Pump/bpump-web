export default function TermsOfUse() {
    const articles = [
        {
            title: "Introduction",
            content:
                "Bienvenue sur B-Pump. En accédant à ce site Web, vous acceptez d'être lié par ces termes d'utilisation, toutes les lois et réglementations applicables, et acceptez d'être responsable de la conformité à toutes les lois locales applicables. Si vous n'acceptez pas l'une de ces conditions, il vous est interdit d'utiliser ou d'accéder à ce site. Le matériel contenu sur ce site Web est protégé par les lois applicables sur le droit d'auteur et les marques de commerce.",
        },
        {
            title: "Utilisation de la licence",
            content:
                "Il est permis de télécharger temporairement une copie du matériel (information ou logiciel) sur le site Web de B-Pump pour un visionnement personnel et non commercial seulement. Il s'agit de l'octroi d'une licence, et non d'un transfert de titre, et sous cette licence, vous ne pouvez pas: modifier ou copier le matériel; utiliser le matériel à des fins commerciales ou pour toute exposition publique (commerciale ou non commerciale); tenter de décompiler ou de rétro-ingénierer tout logiciel contenu sur le site Web de B-Pump; supprimer les droits d'auteur ou autres mentions de propriété du matériel; ou transférer le matériel à une autre personne ou « refléter » le matériel sur un autre serveur.",
        },
        {
            title: "Responsabilité",
            content:
                "Dans aucun cas, B-Pump ou ses fournisseurs ne peuvent être tenus responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou en raison d'une interruption d'activité) résultant de l'utilisation ou de l'incapacité à utiliser le matériel sur le site Web de B-Pump, même si B-Pump ou un représentant autorisé de B-Pump a été informé verbalement ou par écrit de la possibilité de tels dommages. ",
        },
        {
            title: "Modifications des termes",
            content:
                "B-Pump peut réviser ces termes d'utilisation de son site Web à tout moment sans préavis. En utilisant ce site Web, vous acceptez d'être lié par la version actuelle de ces termes d'utilisation.",
        },
    ];

    return (
        <section className="grid items-center gap-6">
            <div className="container w-full pt-6">
                <h1 className="mb-10 text-center text-5xl font-bold">Termes d&apos;utilisation B-Pump</h1>
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
