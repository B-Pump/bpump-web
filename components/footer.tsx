import { IconBrandGithub, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";

import { buttonVariants } from "./ui/button";

export function Footer() {
    return (
        <footer className="select-none bg-muted">
            <div className="container">
                <h3 className="flex justify-end text-muted-foreground">Nos réseaux</h3>
                <div className="flex justify-end">
                    <div className="flex flex-col gap-3">
                        <Link href="" className={buttonVariants({ size: "icon", variant: "outline" })}>
                            <IconBrandInstagram />
                        </Link>
                        <Link href="" className={buttonVariants({ size: "icon", variant: "outline" })}>
                            <IconBrandTiktok />
                        </Link>
                        <Link href="" className={buttonVariants({ size: "icon", variant: "outline" })}>
                            <IconBrandGithub />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
