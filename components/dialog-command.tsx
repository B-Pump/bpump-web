"use client";

import { Circle, Computer, Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";

import config from "@/config/config.json";

export function DialogCommand() {
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
                <Button variant="outline" onClick={() => setOpen((open) => !open)}>
                    <p className="text-muted-foreground">Rechercher</p>
                    <p className="text-sm text-muted-foreground ml-5">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">CTRL</span>
                        </kbd>
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 ml-1">
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
                                <Circle className="mr-2 h-4 w-4" />
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
                            <Computer className="mr-2 h-4 w-4" />
                            <span>Système</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                setTheme("light");
                                setOpen(false);
                            }}
                        >
                            <SunMedium className="mr-2 h-4 w-4" />
                            <span>Clair</span>
                        </CommandItem>
                        <CommandItem
                            onSelect={() => {
                                setTheme("dark");
                                setOpen(false);
                            }}
                        >
                            <Moon className="mr-2 h-4 w-4" />
                            <span>Sombre</span>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
