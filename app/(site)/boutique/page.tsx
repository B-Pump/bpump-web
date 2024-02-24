"use client";
import { BackgroundGradientDemo } from "@/components/backfround-gradient-card";
import { GoogleGeminiEffectDemo } from "@/components/loading_scrool_coponent";

export default function Boutique() {
    return (
        <section className="grid items-center gap-6">
            <GoogleGeminiEffectDemo />
            <BackgroundGradientDemo/>
            <BackgroundGradientDemo/> {/*je ne sias pas pk mais le fond qui brille prend toute la place*/}
            <BackgroundGradientDemo/>
            <p>Boutique</p>
        </section>
    );
}
