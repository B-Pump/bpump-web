"use client";

import { IconHome, IconShirtSport } from "@tabler/icons-react";
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
import { Input } from "@/components/ui/input";

import { useAuth } from "@/context/auth";
import useFetch from "@/lib/api";

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
                            <CardContent>
                                <form>
                                    <Input placeholder={token || ""} />
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        toast("Dashboard", {
                                            description: "Identifiant modifié avec succès !",
                                        });
                                    }}
                                >
                                    Modifier
                                </Button>
                            </CardFooter>
                        </Card>
                        <Card className="my-5">
                            <CardHeader>
                                <CardTitle>Votre mot de passe</CardTitle>
                                <CardDescription>Utilisé pour vous connecter à nos services.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="mb-2">
                                    <Input placeholder="Mot de passe actuel" />
                                </form>
                                <form className="mt-2">
                                    <Input placeholder="Nouveau mot de passe" />
                                </form>
                            </CardContent>
                            <CardFooter className="border-t px-6 py-4">
                                <Button
                                    variant="secondary"
                                    onClick={() => {
                                        toast("Dashboard", {
                                            description: "Mot de passe modifié avec succès !",
                                        });
                                    }}
                                >
                                    Modifier
                                </Button>
                            </CardFooter>
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
                        <>
                            {data.length < 1 ? (
                                <div className="flex flex-col items-center gap-1 text-center">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        Vous n&apos;avez aucun programmes
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Vous pouvez désormais en créer depuis le site !
                                    </p>
                                    <Button className="mt-4">Créer un programme</Button>
                                </div>
                            ) : (
                                <div>
                                    {data &&
                                        data.map((item: ProgItem, index: number) => <p key={index}>{item.title}</p>)}
                                </div>
                            )}
                        </>
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
