"use client";

import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { MaskContainer } from "@/components/ui/mask";
import { useAuth } from "@/context/auth";
import { toast } from "sonner";

export default function Contact() {
    const { token } = useAuth();

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
                    account: token || "Pas de compte",
                    name: values.username,
                    email: values.email,
                    phone: values.phone,
                    subject: values.subject,
                    message: values.contenu,
                },
                process.env.NEXT_PUBLIC_EJS_PUBLIC_KEY,
            )
            .then(() => {
                toast("Contact", {
                    description: "Demande de contact envoyée avec succès !",
                });
            })
            .catch((error) => console.error("Error while sending email :", error));
    }

    return (
        <div className="container grid flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <div className="p-8">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" id="contact">
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
                                        <Input placeholder="Sujet du message" autoComplete="off" required {...field} />
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
            <div className="-mb-32 -mt-48 select-none md:m-0">
                <MaskContainer
                    revealText={
                        <p className="mx-auto max-w-4xl text-center text-4xl font-bold text-muted-foreground">
                            Quand la détermination forge le corps, chaque séance devient une étape vers la victoire
                            personnelle.
                        </p>
                    }
                >
                    Quand la <span className="text-primary">détermination</span> forge le corps, chaque séance devient
                    une étape vers la <span className="text-primary">victoire personnelle</span>.
                </MaskContainer>
            </div>
        </div>
    );
}
