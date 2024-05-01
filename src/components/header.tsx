"use client";

import { Bot, Menu, Moon, ShoppingCart, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { useAuth } from "@/context/auth";
import { useCartStore } from "@/context/cart";
import { cn } from "@/lib/utils";

import config from "@/config.json";

function NavDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="flex items-center justify-center gap-2">
                        <Bot />
                        <span className="font-bold">{config.sugar.title}</span>
                    </SheetTitle>
                    <SheetDescription className="text-center">{config.sugar.description}</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-10">
                    {config.link.map((item, index) => (
                        <SheetClose asChild key={index}>
                            <Link
                                href={`/${item.href}`}
                                className={buttonVariants({
                                    size: "sm",
                                    variant: "secondary",
                                })}
                            >
                                {item.title}
                            </Link>
                        </SheetClose>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
}

function CartDrawer() {
    const { content } = useCartStore();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <ShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle className="text-center font-bold">Votre panier</SheetTitle>
                </SheetHeader>
                {content.length < 1 ? (
                    <div className="flex h-full flex-col items-center justify-center space-y-1">
                        <ShoppingCart className="mb-4 size-16 text-muted-foreground" />
                        <div className="text-xl font-medium text-muted-foreground">Votre panier est vide !</div>
                        <SheetTrigger asChild>
                            <Link
                                href="/shop"
                                className={cn(
                                    buttonVariants({
                                        variant: "link",
                                        size: "sm",
                                        className: "text-sm text-muted-foreground",
                                    }),
                                    "text-center pt-3",
                                )}
                            >
                                Ajoutez des produits à votre panier pour <br /> procèder au paiement
                            </Link>
                        </SheetTrigger>
                    </div>
                ) : (
                    <>{/* TODO: dynamic cart */}</>
                )}
            </SheetContent>
        </Sheet>
    );
}

export default function Header() {
    const router = useRouter();

    const { theme, setTheme } = useTheme();
    const { authenticated, logout } = useAuth();

    return (
        <header className="sticky top-0 z-50 w-full select-none border-b bg-background lg:static">
            <div className="container flex h-16 items-center justify-between">
                <div>
                    <div className="lg:hidden">
                        <NavDrawer />
                    </div>
                    <div className="hidden gap-10 lg:flex">
                        <div className="flex items-center gap-2">
                            <Bot />
                            <span className="font-bold">{config.sugar.title}</span>
                        </div>
                        <nav className="space-x-5">
                            {config.link.map((item: { title: string; href: string }, index: number) => (
                                <Link href={`/${item.href}`} legacyBehavior passHref key={index}>
                                    <Button variant="ghost">{item.title}</Button>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
                <div>
                    <nav className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => {
                                if (theme === "dark") {
                                    setTheme("light");
                                } else if (theme === "light") {
                                    setTheme("dark");
                                } else setTheme("dark");
                            }}
                        >
                            <Moon className="size-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                            <Sun className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100" />
                        </Button>
                        <CartDrawer />
                        {authenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <User />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => router.push("/account")}>Dashboard</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => {
                                            if (logout) logout();
                                            toast("Authentification", {
                                                description: "Déconnexion éffectuée avec succès",
                                            });
                                        }}
                                    >
                                        Déconnexion
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Button variant="secondary" onClick={() => router.push("/login")}>
                                Connexion
                            </Button>
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
