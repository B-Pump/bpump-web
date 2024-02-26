"use client";

import { Medal, Moon, Sun, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { DialogCommand } from "@/components/dialog-command";
import { Drawer } from "@/components/drawer";
import { Menu } from "@/components/menu";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import config from "@/config/config.json";

export const Header = () => {
    const router = useRouter();
    const { status } = useSession();
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full select-none border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="lg:hidden">
                    <Drawer />
                </div>
                <div className="hidden gap-6 lg:flex lg:gap-10">
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
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                                if (theme === "dark") {
                                    setTheme("light");
                                } else if (theme === "light") {
                                    setTheme("dark");
                                } else {
                                    setTheme("dark");
                                }
                            }}
                        >
                            <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        {status === "unauthenticated" ? (
                            <Button
                                variant="secondary"
                                onClick={() => {
                                    signIn();
                                }}
                            >
                                Connexion
                            </Button>
                        ) : status === "authenticated" ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <User />
                                        <span className="sr-only">Account dropdown</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => router.push("account")}>
                                        Votre compte
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => router.push("programs")}>
                                        Vos programmes
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : null}
                    </nav>
                </div>
            </div>
        </header>
    );
};
