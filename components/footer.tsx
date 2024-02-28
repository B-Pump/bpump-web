import { cn } from "@/lib/utils";
import { IconRobot } from "@tabler/icons-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

import config from "@/config/config.json";

export function Footer() {
    const footer = [
        {
            title: "Réseaux",
            content: [
                { title: "Instagram", href: "https://www.instagram.com/b.pump76/" },
                { title: "TikTok", href: "" },
                { title: "GitHub", href: "https://github.com/B-Pump" },
            ],
        },
        {
            title: "Crédits",
            content: [
                { title: "shadcn/ui", href: "https://ui.shadcn.com/" },
                { title: "Aceternity UI", href: "https://ui.aceternity.com/" },
            ],
        },
        {
            title: "Aide",
            content: [
                { title: "FAQ", href: "faq" },
                { title: "Politique de confidentialité", href: "confidentitality" },
                { title: "Termes d'utilisation", href: "terms" },
            ],
        },
    ];

    return (
        <footer className="border-t p-10">
            <div className="container">
                <div className="flex flex-col items-center justify-between text-center md:flex-row md:items-start md:text-start">
                    <div className="mb-4 md:mb-0">
                        <Link href="/" className="flex space-x-1">
                            <IconRobot />
                            <p className="font-bold">B-Pump</p>
                        </Link>
                    </div>
                    {footer.map((item, index) => (
                        <div key={index}>
                            <h3 className="pb-5 pt-3 font-bold md:pb-0">{item.title}</h3>
                            <div>
                                <ul>
                                    {item.content.map((item, index) => (
                                        <li key={index} className="-mx-3">
                                            <Link
                                                href={item.href}
                                                target="_blank"
                                                className={cn(
                                                    buttonVariants({
                                                        variant: "link",
                                                        size: "sm",
                                                        className: "text-sm text-muted-foreground",
                                                    }),
                                                )}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center space-x-1 pt-10 text-sm text-muted-foreground md:justify-start md:pt-0">
                    <p>Fait par</p>
                    {config.author.map((item, index) => (
                        <div key={index}>
                            <Link href={item.url} className="font-bold hover:text-accent-foreground">
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
