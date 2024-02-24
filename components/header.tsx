import { Medal, User } from "lucide-react";
import Link from "next/link";

import { DialogCommand } from "./dialog-command";
import { ThemeToggle } from "./theme-toggle";

import { Drawer } from "./drawer";
import { Menu } from "./menu";
import { buttonVariants } from "./ui/button";

import config from "../config/config.json";

export const Header = () => {
    return (
        <header className="select-none bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="lg:hidden">
                    <Drawer />
                </div>
                <div className="hidden lg:flex gap-6 lg:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <Medal className="size-6" />
                        <span className="inline-block font-bold">{config.sugar.title}</span>
                    </Link>
                    <nav className="flex gap-6">
                        <Menu />
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <DialogCommand />
                        <Link href="account">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "outline",
                                })}
                            >
                                <User className="size-5" />
                                <span className="sr-only">Account</span>
                            </div>
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
};
