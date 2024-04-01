"use client";

import {
    IconCircle,
    IconDeviceLaptop,
    IconMenu2,
    IconMoon,
    IconRobot,
    IconSearch,
    IconShoppingCart,
    IconSun,
    IconUser,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";

import config from "@/config/config.json";

function Menu() {
    const home: { title: string; href: string; description: string }[] = [
        {
            title: "Bienvenue",
            href: "/",
            description: "Page d'accueil du site",
        },
        {
            title: "Présentation",
            href: "/",
            description: "Présentation brève des technologies utilisées",
        },
        {
            title: "Retour utilisateur",
            href: "/",
            description: "Avis des personnes ayant eu l'occasion de tester notre robot",
        },
    ];

    const about: { title: string; href: string; description: string }[] = [
        {
            title: "Notre équipe",
            href: "about",
            description: "Présentation des membres du projet et du rôle de chacun",
        },
        {
            title: "Détails technique",
            href: "about",
            description: "Découvrez les composants et la méthode de fabrication du robot",
        },
        {
            title: "Détails logiciels",
            href: "about",
            description: "Explorez les méthodes utilisées pour la programmation du robot",
        },
    ];

    const boutique: { title: string; href: string; description: string }[] = [
        {
            title: "Robot",
            href: "boutique",
            description: "Allez sur la page principale de la boutique",
        },
        {
            title: "Produits dérivés",
            href: "boutique",
            description: "Soutenez notre projet en vous procurant des produits dérivés",
        },
    ];

    const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
        ({ className, title, children, ...props }, ref) => {
            return (
                <li>
                    <NavigationMenuLink asChild>
                        <a
                            ref={ref}
                            className={cn(
                                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                                className,
                            )}
                            {...props}
                        >
                            <div className="text-sm font-medium leading-none">{title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
                        </a>
                    </NavigationMenuLink>
                </li>
            );
        },
    );

    ListItem.displayName = "ListItem";

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Accueil</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <IconRobot className="size-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">{config.sugar.title}</div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            {config.sugar.description}
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            {home.map((item, index) => (
                                <ListItem key={index} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>À propos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {about.map((item, index) => (
                                <ListItem key={index} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Boutique</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {boutique.map((item, index) => (
                                <ListItem key={index} title={item.title} href={item.href}>
                                    {item.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="contact" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

function NavDrawer() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <IconMenu2 />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle className="text-center">{config.sugar.title}</SheetTitle>
                    <SheetDescription className="text-center">{config.sugar.description}</SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-10">
                    {config.link.map((item, index) => (
                        <SheetClose key={index} asChild>
                            <Link
                                href={item.href}
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
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <IconShoppingCart />
                </Button>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className="space-y-2.5 pr-6">
                    <SheetTitle>Votre panier</SheetTitle>
                    <Separator />
                </SheetHeader>
                <div className="flex h-full flex-col items-center justify-center space-y-1">
                    <IconShoppingCart className="mb-4 size-16 text-muted-foreground" />
                    <div className="text-xl font-medium text-muted-foreground">Votre panier est vide !</div>
                    <SheetTrigger asChild>
                        <Link
                            href="boutique"
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
            </SheetContent>
        </Sheet>
    );
}

function DialogCommand() {
    const router = useRouter();
    const { setTheme } = useTheme();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [open]);

    return (
        <>
            <div className="w-full flex-1 md:w-auto md:flex-none">
                <Button
                    className="lg:hidden"
                    variant="outline"
                    size="icon"
                    onClick={() => setOpen((open: boolean) => !open)}
                >
                    <IconSearch />
                </Button>
                <Button className="hidden lg:flex" variant="outline" onClick={() => setOpen((open: boolean) => !open)}>
                    <p className="text-muted-foreground">Rechercher</p>
                    <p className="ml-5 text-sm text-muted-foreground">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">CTRL</span>
                        </kbd>
                        <kbd className="pointer-events-none ml-1 inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">K</span>
                        </kbd>
                    </p>
                </Button>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Entrez une commande ou faites une recherche..." />
                <CommandList>
                    <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
                    <CommandGroup heading="Catégories">
                        {config?.link.map((item, index) => (
                            <CommandItem
                                key={index}
                                onSelect={() => {
                                    router.push(item.href);
                                    setOpen(false);
                                }}
                            >
                                <IconCircle className="mr-2 size-4" />
                                <span>{item.title}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Thème">
                        <CommandItem
                            onSelect={() => {
                                setTheme("system");
                                setOpen(false);
                            }}
                        >
                            <IconDeviceLaptop className="mr-2 size-4" />
                            <span>Système</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                setTheme("light");
                                setOpen(false);
                            }}
                        >
                            <IconSun className="mr-2 size-4" />
                            <span>Clair</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                setTheme("dark");
                                setOpen(false);
                            }}
                        >
                            <IconMoon className="mr-2 size-4" />
                            <span>Sombre</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}

export function Header() {
    const router = useRouter();
    const { authState, onLogout } = useAuth();
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 w-full select-none border-b bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="lg:hidden">
                    <NavDrawer />
                </div>
                <div className="hidden gap-6 lg:flex lg:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <IconRobot className="size-6" />
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
                            <IconSun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <IconMoon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                        <CartDrawer />
                        {authState?.authenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <IconUser />
                                        <span className="sr-only">Account dropdown</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => router.push("account")}>
                                        Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem
                                        onClick={() => {
                                            if (onLogout) onLogout();
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
