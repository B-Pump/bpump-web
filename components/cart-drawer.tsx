import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

export function CartDrawer() {
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
