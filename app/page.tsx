"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <section className="grid items-center gap-6 pb-8 pt-6 md:py-10">
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
                <Button
                    onClick={() =>
                        toast("Voici une notification", {
                            description: "Je suis une notification",
                            action: {
                                label: "Bilal",
                                onClick: () => console.log("Bilaaaaal"),
                            },
                        })
                    }
                >
                    Notif
                </Button>
            </div>
        </section>
    );
}
