"use client";

import { Medal, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { DialogCommand } from "@/components/dialog-command";
import { Drawer } from "@/components/drawer";
import { Menu } from "@/components/menu";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import config from "@/config/config.json";

export const Header = () => {
    const { status } = useSession();
    const router = useRouter();

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
                        <ThemeToggle />
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
