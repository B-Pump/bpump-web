import { Github, Instagram } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "./ui/button";

import config from "../config/config.json";

export const Footer = () => {
    return (
        <footer className="select-none bg-card">
            <div className="p-8">
                <div className="w-full flex justify-between">
                    <div className="flex flex-col gap-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">B-Pump</h3>
                            <p>Votre coach sportif</p>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                            &copy; {new Date().getFullYear()} B-Pump - All rights reserved
                        </p>
                        <div className="flex flex-row space-x-1">
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
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        {config.link.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:underline"
                            >
                                {item.title}
                            </Link>
                        ))}
                        <Link href="account" className="text-sm text-muted-foreground hover:underline">
                            Compte
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
