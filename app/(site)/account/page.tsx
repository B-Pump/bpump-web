"use client";

import { IconHome, IconShirtSport } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useAuth } from "@/context/auth";
import useFetch from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface ProgsData {
    data: ProgItem[];
    isLoading: boolean;
    error: boolean;
    refetch: () => void;
}

type TabItem = {
    title: string;
    value: string;
    icon: React.ReactNode;
    content: React.ReactNode;
};

export default function Account() {
    const { authenticated, token, logout, remove } = useAuth();
    const router = useRouter();

    const { data, isLoading, error }: ProgsData = useFetch("GET", `progs/all?username=${token}`);

    useEffect(() => {
        if (!authenticated) router.replace("/");
    }, [authenticated, router]);

    const [selectedTab, setSelectedTab] = useState<string>("account");

    const formSchema_username = z.object({
        username: z.string().min(7, {
            message: "Doit être au moins de 5 caractères",
        }),
    });
    const form_username = useForm<z.infer<typeof formSchema_username>>({
        resolver: zodResolver(formSchema_username),
        defaultValues: {
            username: "",
        },
    });

    const formSchema_password = z.object({
        past_password: z.string().min(5, {
            message: "Doit être au moins de 5 caractères",
        }),
        new_password: z.string().min(5, {
            message: "Doit être au moins de 5 caractères",
        }),
    });
    const form_password = useForm<z.infer<typeof formSchema_password>>({
        resolver: zodResolver(formSchema_password),
        defaultValues: {
            past_password: "",
            new_password: "",
        },
    });

    function onSubmit_username(values: z.infer<typeof formSchema_username>) {
        // TODO: edit username method (api)

        toast("Dashboard", {
            description: "Identifiant modifié avec succès !",
        });
    }
    function onSubmit_password(values: z.infer<typeof formSchema_password>) {
        if (values.new_password === values.past_password) {
            // TODO: edit password method (api)

            toast("Dashboard", {
                description: "Mot de passe modifié avec succès !",
            });
        } else {
            toast("Dashboard", {
                description: "Les mots de passe ne correspondent pas !",
            });
        }
    }

    const items: TabItem[] = [
        {
            title: "Votre compte",
            value: "account",
            icon: <IconHome className="size-4" />,
            content: (
                <>
                    <h1 className="text-center text-5xl font-semibold md:text-start">
                        Bonjour, {token && token.charAt(0).toUpperCase() + token.slice(1)} !
                    </h1>
                    <div className="mt-10">
                        <Card className="my-5">
                            <CardHeader>
                                <CardTitle>Votre identifiant</CardTitle>
                                <CardDescription>
                                    Utilisé pour vous identifier et vous connecter à nos services.
                                </CardDescription>
                            </CardHeader>
                            <Form {...form_username}>
                                <form onSubmit={form_username.handleSubmit(onSubmit_username)}>
                                    <CardContent>
                                        <FormField
                                            name="username"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder={token || ""}
                                                            autoComplete="off"
                                                            required
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                    <CardFooter className="border-t px-6 py-4">
                                        <Button type="submit" variant="secondary">
                                            Modifier
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Form>
                        </Card>
                        <Card className="my-5">
                            <CardHeader>
                                <CardTitle>Votre mot de passe</CardTitle>
                                <CardDescription>Utilisé pour vous connecter à nos services.</CardDescription>
                            </CardHeader>
                            <Form {...form_password}>
                                <form
                                    onSubmit={form_password.handleSubmit(onSubmit_password)}
                                    className="space-y-5"
                                    id="password"
                                >
                                    <CardContent className="flex flex-col gap-3">
                                        <FormField
                                            name="past_password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Mot de passe actuel"
                                                            autoComplete="off"
                                                            required
                                                            type="password"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            name="new_password"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Nouveau mot de passe"
                                                            autoComplete="off"
                                                            required
                                                            type="password"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </CardContent>
                                    <CardFooter className="border-t px-6 py-4">
                                        <Button type="submit" variant="secondary">
                                            Modifier
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Form>
                        </Card>
                        <Card className="my-5">
                            <CardHeader>
                                <CardTitle>Votre compte</CardTitle>
                                <CardDescription>Zone dangereuse !</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Déconnexion : Permet de vous déconnecter du site. Vos données seront conservées.
                                </p>
                                <p className="text-muted-foreground">
                                    Suppression : Cette action est irréversible. Vous perdrez toutes vos données.
                                </p>
                            </CardContent>
                            <CardFooter className="gap-2 border-t px-6 py-4">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        if (logout) logout();
                                        toast("Authentification", {
                                            description: "Déconnexion éffectuée avec succès",
                                        });
                                    }}
                                >
                                    Déconnexion
                                </Button>
                                <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                        <Button variant="destructive">Suppression</Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>Êtes vous vraiment sûr ?</AlertDialogTitle>
                                            <AlertDialogDescription>
                                                Cette action est irréversible. Vous perdrez toutes vos données.
                                            </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                                            <AlertDialogAction
                                                onClick={() => {
                                                    if (remove && typeof token === "string") remove(token);
                                                    toast("Dashboard", {
                                                        description: "Compte supprimé avec succès !",
                                                    });
                                                }}
                                            >
                                                Confirmer
                                            </AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            </CardFooter>
                        </Card>
                    </div>
                </>
            ),
        },
        {
            title: "Vos programmes",
            value: "programs",
            icon: <IconShirtSport className="size-4" />,
            content: (
                <>
                    {isLoading ? (
                        <>{/* TODO: Skeleton */}</>
                    ) : error ? (
                        <p>Erreur lors du chargement de vos programmes</p>
                    ) : data ? (
                        <div className="flex flex-col gap-5 lg:flex-row">
                            {data &&
                                data.map((item: ProgItem, index: number) => (
                                    <Link href={`/account/${item?.id}`} key={index}>
                                        <div className="flex flex-col gap-3 rounded-lg border border-border p-6 shadow-sm transition duration-300 hover:shadow-primary">
                                            <div className="items-center justify-between">
                                                <Image
                                                    className="rounded-md"
                                                    src={item?.icon || "https://urlz.fr/q5qt"}
                                                    alt=""
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <div className="justify-center">
                                                <p className="overflow-hidden text-sm text-muted-foreground">
                                                    {item?.description || "Description non trouvée"}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xl font-medium text-foreground">
                                                    {item?.title || "Titre non trouvé"}
                                                </p>
                                                <p className="text-sm text-muted-foreground">
                                                    {item?.category || "Catégorie non trouvée"} - Niveau{" "}
                                                    {item?.difficulty || "Difficultée non trouvée"}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    ) : null}
                </>
            ),
        },
    ];

    return (
        <div className="grid min-h-[93vh] w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="border-r">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center gap-2 border-b px-2 lg:h-[60px] lg:px-6">
                        <p>Dashboard</p>
                    </div>
                    <nav className="grid items-start px-2 font-medium lg:px-4">
                        {items.map((item: TabItem, index: number) => (
                            <Button
                                variant="ghost"
                                onClick={() => setSelectedTab(item.value)}
                                className={`justify-start gap-3 text-base text-muted-foreground hover:text-primary ${
                                    selectedTab === item.value && "text-primary"
                                }`}
                                key={index}
                            >
                                {item.icon}
                                {item.title}
                            </Button>
                        ))}
                    </nav>
                </div>
            </div>
            <div className="flex flex-1 p-5">
                {items.map((item: TabItem, index: number) => {
                    if (selectedTab === item.value) {
                        return (
                            <div className="flex-1 rounded-lg border border-dashed p-6" key={index}>
                                {item.content}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
