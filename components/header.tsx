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
import { useEffect, useState } from "react";
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
            <SheetContent side="right">
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
    const { authenticated, logout } = useAuth();
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
                        {config.link.map((item: { title: string; href: string }, index: number) => (
                            <Link href={item.href} legacyBehavior passHref key={index}>
                                <Button variant="ghost">{item.title}</Button>
                            </Link>
                        ))}
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
                                } else setTheme("dark");
                            }}
                        >
                            <IconSun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <IconMoon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </Button>
                        <CartDrawer />
                        {authenticated ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <IconUser />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem onClick={() => router.push("account")}>
                                        Dashboard
                                    </DropdownMenuItem>
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
