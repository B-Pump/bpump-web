import { Bot } from "lucide-react";

import config from "@/config.json";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

interface FooterItem {
    title: string;
    new_tab: boolean;
    content: ContentItem[];
}
interface ContentItem {
    title: string;
    href: string;
}

export default function Footer() {
    const footer = [
        {
            title: "Réseaux",
            new_tab: true,
            content: [
                { title: "Instagram", href: "https://instagram.com/b.pump76/" },
                { title: "YouTube", href: "https://youtube.com/@b-pump" },
                { title: "GitHub", href: "https://github.com/B-Pump" },
            ],
        },
        {
            title: "Crédits",
            new_tab: true,
            content: [
                { title: "Next.js", href: "https://nextjs.org/" },
                { title: "shadcn/ui", href: "https://ui.shadcn.com/" },
                { title: "Aceternity UI", href: "https://ui.aceternity.com/" },
            ],
        },
        {
            title: "Aide",
            new_tab: false,
            content: [
                { title: "FAQ", href: "faq" },
                { title: "Politique de confidentialité", href: "confidentiality" },
                { title: "Conditions d'utilisation", href: "terms" },
            ],
        },
    ];

    return (
        <footer className="z-50 select-none border-t py-10">
            <div className="container">
                <div className="flex flex-col items-center justify-between text-center sm:flex-row sm:items-start sm:text-start">
                    <div className="mb-5 flex gap-2 sm:mb-0">
                        <Bot />
                        <span className="font-bold">{config.sugar.title}</span>
                    </div>
                    <>
                        {footer.map((item: FooterItem, index: number) => (
                            <div className="mb-5 sm:mb-0" key={index}>
                                <h3 className="font-bold">{item.title}</h3>
                                <ul>
                                    {item.content.map((content: ContentItem, index: number) => (
                                        <li key={index}>
                                            <Link
                                                href={content.href}
                                                target={item.new_tab ? "_blank" : "_self"}
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "link",
                                                        size: "sm",
                                                        className: "text-sm text-muted-foreground",
                                                    }),
                                                )}
                                            >
                                                {content.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </>
                </div>
                <div className="flex justify-center space-x-1 pt-10 text-sm text-muted-foreground sm:pt-0 md:justify-start">
                    <p>Fait par</p>
                    {config.author.map((item: { name: string; url: string }, index: number) => (
                        <div key={index}>
                            <Link href={item.url} target="_blank" className="font-bold hover:text-accent-foreground">
                                {item.name}
                            </Link>
                            {index < config.author.length - 1 && <>&nbsp;&</>}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}
