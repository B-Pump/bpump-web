import Link from "next/link";

import { NavItem } from "@/types/nav";
import { Icons } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

interface MainNavProps {
    items?: NavItem[];
}

export const Header = () => {
    const items = [{ title: "Accueil", href: "/" }];

    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Icons.bpump className="size-6" />
                        <span className="inline-block font-bold">Projet B-Pump</span>
                    </Link>
                    {items?.length ? (
                        <nav className="flex gap-6">
                            {items.map(
                                (item, index) =>
                                    item.href && (
                                        <Link
                                            key={index}
                                            href={item.href}
                                            className="flex items-center text-sm font-medium text-muted-foreground"
                                        >
                                            {item.title}
                                        </Link>
                                    ),
                            )}
                        </nav>
                    ) : null}
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <Link href="https://www.instagram.com/b.pump76/" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "outline",
                                })}
                            >
                                <Icons.instagram className="size-5" />
                                <span className="sr-only">Instagram</span>
                            </div>
                        </Link>
                        <Link href="https://github.com/B-Pump" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "outline",
                                })}
                            >
                                <Icons.github className="size-5" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};
