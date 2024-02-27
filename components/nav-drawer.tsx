import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import config from "@/config/config.json";

export function NavDrawer() {
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
