"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useAuth } from "@/context/auth";

export default function Contact() {
    const { authState } = useAuth();

    const formSchema = z.object({
        username: z.string().min(5, {
            message: "Doit être au moins de 5 caractères",
        }),
        email: z.string().email({
            message: "Doit être une adresse email valide",
        }),
        phone: z.string().regex(new RegExp(/^(\+33|0)[1-9](\d{2}){4}$/), {
            message: "Doit être un numéro de téléphone valide",
        }),
        subject: z.string().min(5, {
            message: "Doit être au moins de 5 caractères",
        }),
        contenu: z.string().min(20, {
            message: "Doit être au moins de 20 caractères",
        }),
    });
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            phone: "",
            subject: "",
            contenu: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        emailjs
            .send(
                "service_21096s9",
                "template_amv97xj",
                {
                    account: authState?.token || "Pas de compte",
                    name: values.username,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                    message: values.contenu,
                },
                process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY,
            )
            .catch((error) => console.error("Error while sending email :", error));
    }

    return (
        <section className="grid items-center gap-6">
            <div className="container flex pt-6 md:py-10">
                <div className="flex-1">
                    <h1 className="mb-10 text-center text-3xl font-bold">
                        Contactez notre équipe en renseignant tous les champs ci-dessous
                    </h1>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="Nom et Prénom" autoComplete="off" required {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Votre adresse email"
                                                autoComplete="on"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="tel"
                                                placeholder="Numéro de téléphone"
                                                autoComplete="on"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Sujet du message"
                                                autoComplete="off"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="contenu"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Contenu de votre message"
                                                autoComplete="off"
                                                required
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" variant="secondary">
                                Envoyer
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <h2 className="mb-4 text-xl font-semibold">Contactez-nous</h2>
                    <p className="mb-2">Vous pouvez également nous contacter par téléphone ou par email :</p>
                    <p>Téléphone : +123456789</p>
                    <p>Email : b.pump.project@gmail.com</p>
                    <p className="mt-4">Heures de disponibilité : Du lundi au vendredi, de 9h à 18h</p>
                </div>
            </div>
        </section>
    );
}
