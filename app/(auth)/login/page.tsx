"use client";

import { IconChevronLeft, IconRobot } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";

interface Inputs {
    username: string;
    password: string;
}

export default function Login() {
    const { onLogin } = useAuth();
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);

        const result = await onLogin!(data.username, data.password);
        if (result && result.error) {
            alert("Identifiants invalides");
        } else {
            router.replace("/");
            toast("Authentification", {
                description: `Vous êtes désormais connecté en tant que ${
                    data.username.charAt(0).toUpperCase() + data.username.slice(1)
                }`,
            });
        }

        setLoading(false);
    };

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")}
            >
                <IconChevronLeft className="mr-2 size-4" />
                Retour à l&apos;accueil
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <IconRobot className="mx-auto size-6" />
                    <h1 className="text-2xl font-semibold tracking-tight">Bienvenue !</h1>
                    <p className="text-sm text-muted-foreground">
                        Entrez vos identifiants pour vous connecter à votre compte
                    </p>
                </div>
                <div className="grid gap-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="username">
                                    Nom d&apos;utilisateur
                                </Label>
                                <Input
                                    id="username"
                                    placeholder="Nom d'utilisateur"
                                    type="text"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    autoComplete="off"
                                    required={true}
                                    {...register("username")}
                                />
                                <Label className="sr-only" htmlFor="username">
                                    Mot de passe
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="Mot de passe"
                                    type="password"
                                    autoCapitalize="none"
                                    autoCorrect="off"
                                    autoComplete="on"
                                    required={true}
                                    {...register("password")}
                                />
                            </div>
                            <Button variant="secondary" disabled={loading}>
                                Vous connecter
                            </Button>
                        </div>
                    </form>
                </div>
                {!loading ? (
                    <p className="px-8 text-center text-sm text-muted-foreground">
                        <Link href="/register" className="underline underline-offset-4">
                            Vous n&apos;avez pas de compte ?
                        </Link>
                    </p>
                ) : null}
            </div>
        </div>
    );
}
