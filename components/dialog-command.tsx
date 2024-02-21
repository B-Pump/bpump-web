"use client";

import { Calculator, Calendar, CreditCard, Settings, Smile, User } from "lucide-react";
import { useEffect, useState } from "react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import { Button } from "./ui/button";

export function DialogCommand() {
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
                    <CommandGroup heading="Suggestions">
                        <CommandItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            <span>Calendar</span>
                        </CommandItem>
                        <CommandItem>
                            <Smile className="mr-2 h-4 w-4" />
                            <span>Search Emoji</span>
                        </CommandItem>
                        <CommandItem>
                            <Calculator className="mr-2 h-4 w-4" />
                            <span>Calculator</span>
                        </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    );
}
