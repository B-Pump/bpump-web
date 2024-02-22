import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Register() {
    return (
        <section className="grid grid-cols-2 grid-rows-1 gap-0">
            <div className="bg-card">
                <Image src="" alt="" className="" />
            </div>
            <div>
                <Button variant="outline">Se connecter</Button>
            </div>
        </section>
    );
}
