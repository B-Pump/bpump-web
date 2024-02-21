import { Github, Instagram, Medal } from "lucide-react";
import Link from "next/link";

import { DialogCommand } from "./dialog-command";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "./ui/button";

import config from "../config/config.json";

export const Header = () => {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Medal className="size-6" />
                        <span className="inline-block font-bold">Projet B-Pump</span>
                    </Link>
                    <nav className="flex gap-6">
                        {config.link.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="flex items-center text-sm font-medium text-muted-foreground"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <DialogCommand />
                        <Link href="https://www.instagram.com/b.pump76/" target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "outline",
                                })}
                            >
                                <Instagram className="size-5" />
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
                                <Github className="size-5" />
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
