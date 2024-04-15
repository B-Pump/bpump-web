"use client";

import { IconLock, IconRobot } from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

import { AuroraBackground } from "@/components/ui/aurora";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useAuth } from "@/context/auth";
import { cn } from "@/lib/utils";

import config from "@/config/config.json";

interface Inputs {
    username: string;
    password: string;
}

export default function Register() {
    const { login, register: onRegister } = useAuth();
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        setLoading(true);

        const usernameRegex = /^[a-zA-Z0-9_\-]+$/;
        const passwordRegex = /^[a-zA-Z0-9@#$%^&*]+$/;

        if (usernameRegex.test(data.username.trim()) && passwordRegex.test(data.password.trim())) {
            const result = await onRegister!(data.username, data.password);
            if (result && result.error) {
                alert(result.msg);
            } else {
                const result = await login!(data.username, data.password);
                if (result && result.error) {
                    alert("Veuillez réessayer");
                } else {
                    router.replace("/");
                    toast("Authentification", {
                        description: `Vous êtes désormais connecté en tant que ${
                            data.username.charAt(0).toUpperCase() + data.username.slice(1)
                        }`,
                    });
                }
            }
        } else alert("Le nom d'utilisateur ou le mot de passe contient des caractères non autorisés");

        setLoading(false);
    };

    return (
        <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
                href="/login"
                className={cn(buttonVariants({ variant: "ghost" }), "absolute right-4 top-4 md:right-8 md:top-8")}
            >
                <IconLock className="mr-2 size-4" />
                Vous connecter
            </Link>
            <div className="hidden h-full bg-muted lg:block">
                <AuroraBackground
                    title={config.sugar.title}
                    description="Créez un compte dès maintenant pour modifier vos programmes !"
                />
            </div>
            <div className="lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col space-y-2 text-center">
                        <IconRobot className="mx-auto size-6" />
                        <h1 className="text-2xl font-semibold tracking-tight">Créer un compte</h1>
                        <p className="text-sm text-muted-foreground">
                            Entrez vos informations ci-dessous pour créer un compte
                        </p>
                    </div>
                    <div className="grid gap-6">
                        <form onSubmit={handleSubmit(onSubmit)} id="register">
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
                                        autoComplete="on"
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
                                        autoComplete="off"
                                        required={true}
                                        {...register("password")}
                                    />
                                </div>
                                <Button variant="secondary" disabled={loading}>
                                    Créer un compte
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
