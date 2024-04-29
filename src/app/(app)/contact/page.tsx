"use client";

import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { MaskContainer } from "@/components/aceternity/mask";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useAuth } from "@/context/auth";

interface Inputs {
    name: string;
    email: string;
    phone: string;
    subject: string;
    contenu: string;
}

export default function Contact() {
    const { token } = useAuth();

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        emailjs
            .send(
                "service_21096s9",
                "template_amv97xj",
                {
                    account: token || "Pas de compte",
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    subject: data.subject,
                    message: data.contenu,
                },
                process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY,
            )
            .then(() => {
                toast("Contact", {
                    description: "Demande de contact envoyée avec succès !",
                });
            })
            .catch((error) => console.error("Error while sending email :", error));
    };

    return (
        <section className="grid flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)} id="contact">
                    <div className="grid gap-2">
                        <div className="grid gap-1">
                            <Input
                                id="name"
                                placeholder="Nom et Prénom"
                                type="text"
                                autoCorrect="off"
                                autoComplete="on"
                                required={true}
                                {...register("name")}
                            />
                            <Input
                                id="email"
                                placeholder="Adresse mail"
                                type="email"
                                autoCorrect="off"
                                autoComplete="on"
                                required
                                {...register("email")}
                            />
                            <Input
                                id="phone"
                                placeholder="Numéro de téléphone"
                                type="tel"
                                autoCorrect="off"
                                autoComplete="on"
                                required
                                {...register("phone")}
                            />
                            <Input
                                id="subject"
                                placeholder="Objet"
                                type="text"
                                autoCorrect="off"
                                autoComplete="off"
                                required
                                {...register("subject")}
                            />
                            <Textarea
                                placeholder="Contenu de votre message"
                                autoComplete="off"
                                required
                                {...register("contenu")}
                            />
                        </div>
                        <Button variant="secondary">Confirmer et envoyer</Button>
                    </div>
                </form>
            </div>
            <div className="-mb-32 -mt-48 select-none md:m-0">
                <MaskContainer
                    revealText={
                        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-muted-foreground">
                            Quand la détermination forge le corps, chaque séance devient une étape vers la victoire personnelle.
                        </p>
                    }
                >
                    Quand la <span className="text-primary">détermination</span> forge le corps, chaque séance devient une étape
                    vers la <span className="text-primary">victoire personnelle</span>.
                </MaskContainer>
            </div>
        </section>
    );
}
