"use client";

import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";

import config from "@/config/config.json";

export function Menu() {
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
                                        <Medal className="size-6" />
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
