"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <div className="flex max-w-[980px] flex-col items-start gap-2">
                <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    Procurrez vous un robot B-Pump
                </h1>
                <p className="max-w-[700px] text-lg text-muted-foreground">
                    💪 La perfection dans chaque mouvements.✨ Améliorez la justesse de vos postures grâce à B-Pump,
                    votre coach sportif 100% Robotique !🤖🌟
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    href={"https://www.instagram.com/b.pump76/"}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants()}
                >
                    Instagram
                </Link>
                <Link
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/B-Pump"
                    className={buttonVariants({ variant: "outline" })}
                >
                    GitHub
                </Link>
            </div>
        </section>
    );
}
