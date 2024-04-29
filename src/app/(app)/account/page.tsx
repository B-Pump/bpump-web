"use client";

import { Home, PlaneLanding } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { useDashStore } from "@/context/dashboard";
import { API_URL, useFetch } from "@/lib/api";

interface Inputs_password {
    old_password: string;
    new_password: string;
}
interface Inputs_metabolism {
    weight: number;
    height: number;
    age: number;
    sex: string;
}

interface ProgsData {
    data: ProgItem[];
    isLoading: boolean;
    error: boolean;
    refetch: () => void;
}
interface MetaData {
    data: Inputs_metabolism;
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
    const { tab, setTab } = useDashStore();

    const router = useRouter();

    const {
        data: progsData,
        isLoading: progsLoad,
        error: progsError,
    }: ProgsData = useFetch("GET", `progs/all?username=${token}`);
    const { data: metaData, error: metaError }: MetaData = useFetch("GET", `metabolism?username=${token}`);

    useEffect(() => {
        if (!authenticated) router.replace("/");
    }, [authenticated, router]);

    const { register: passwordRegister, handleSubmit: passwordHandler } = useForm<Inputs_password>();
    const { register: metabolismRegister, handleSubmit: metabolismHandler } = useForm<Inputs_metabolism>();

    const onSubmit_password: SubmitHandler<Inputs_password> = async (data) => {
        try {
            const response = await fetch(
                `${API_URL}/edit_password?username=${token}&old_password=${data.old_password}&new_password=${data.new_password}`,
                {
                    method: "PUT",
                },
            );

            if (response.ok) {
                toast("Dashboard", {
                    description: "Mot de passe modifié avec succès !",
                });
                if (logout) logout();
            } else {
                alert("Mot de passe actuel incorrect");
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };

    const onSubmit_metabolism: SubmitHandler<Inputs_metabolism> = async (data) => {
        try {
            const response = await fetch(`${API_URL}/edit_metabolism?username=${token}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    weight: data.weight,
                    height: data.height,
                    age: data.age,
                    sex: data.sex,
                }),
            });

            if (response.ok) {
                toast("Dashboard", {
                    description: "Métabolisme modifié avec succès !",
                });
                router.push("/");
            } else {
                alert("Mot de passe actuel incorrect");
            }
        } catch (error) {
            console.error("Une erreur s'est produite :", error);
        }
    };

    const sayHello = () => {
        const hour = new Date().getHours();
        return hour >= 6 && hour < 18 ? "Bonjour" : "Bonsoir";
    };

    const items: TabItem[] = [
        {
            title: "Votre compte",
            value: "account",
            icon: <Home className="size-4" />,
            content: (
                <>
                    <h1 className="text-center text-5xl font-semibold md:text-start">
                        {sayHello()}, {token && token.charAt(0).toUpperCase() + token.slice(1)} !
                    </h1>
                    <div className="mt-10">
                        {metaError ? (
                            <p></p>
                        ) : (
                            <Card className="my-5">
                                <CardHeader>
                                    <CardTitle>Votre métabolisme</CardTitle>
                                    <CardDescription>
                                        Renseigner ces informations nous permettrons de mieux adapter les exercices à votre profil
                                        ainsi que de vous proposer des informations sur les calories dépensées lors d&apos;un
                                        exercice.
                                    </CardDescription>
                                </CardHeader>
                                <form onSubmit={metabolismHandler(onSubmit_metabolism)} id="metabolism">
                                    <CardContent className="flex flex-col gap-3">
                                        <Input
                                            id="weight"
                                            placeholder={metaData?.weight != null ? metaData?.weight + " kg" : "Poids (kg)"}
                                            autoComplete="off"
                                            required
                                            type="number"
                                            {...metabolismRegister("weight")}
                                        />
                                        <Input
                                            id="height"
                                            placeholder={metaData?.height != null ? metaData?.height + " cm" : "Taille (cm)"}
                                            autoComplete="off"
                                            required
                                            type="number"
                                            {...metabolismRegister("height")}
                                        />
                                        <Input
                                            id="age"
                                            placeholder={metaData?.age != null ? metaData?.age + " ans" : "Âge (années)"}
                                            autoComplete="off"
                                            required
                                            type="number"
                                            {...metabolismRegister("age")}
                                        />
                                        <Input
                                            id="sex"
                                            placeholder={
                                                metaData?.sex != null
                                                    ? metaData?.sex == "m"
                                                        ? "Homme" + " (mettre f pour changer)"
                                                        : "Femme" + " (mettre m pour changer)"
                                                    : "Sexe de naissance (m ou f)"
                                            }
                                            autoComplete="off"
                                            required
                                            type="text"
                                            {...metabolismRegister("sex")}
                                        />
                                    </CardContent>
                                    <CardFooter className="gap-2 border-t px-6 py-4">
                                        <Button type="submit" variant="secondary">
                                            Modifier
                                        </Button>
                                    </CardFooter>
                                </form>
                            </Card>
                        )}
                        <Card className="my-5">
                            <CardHeader>
                                <CardTitle>Votre mot de passe</CardTitle>
                                <CardDescription>
                                    Utilisé pour vous connecter à nos services. Suite à une modification, vous serez déconnecté.
                                </CardDescription>
                            </CardHeader>
                            <form onSubmit={passwordHandler(onSubmit_password)} id="password">
                                <CardContent className="flex flex-col gap-3">
                                    <Input
                                        id="old_password"
                                        placeholder="Mot de passe actuel"
                                        autoComplete="off"
                                        required
                                        type="password"
                                        {...passwordRegister("old_password")}
                                    />
                                    <Input
                                        id="new_password"
                                        placeholder="Nouveau mot de passe"
                                        autoComplete="off"
                                        required
                                        type="password"
                                        {...passwordRegister("new_password")}
                                    />
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4">
                                    <Button type="submit" variant="secondary">
                                        Modifier
                                    </Button>
                                </CardFooter>
                            </form>
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
            icon: <PlaneLanding className="size-4" />,
            content: (
                <>
                    {progsLoad ? (
                        <p>Chargement de vos programmes...</p>
                    ) : progsError ? (
                        <p>Erreur lors du chargement de vos programmes</p>
                    ) : progsData ? (
                        <div className="flex flex-wrap gap-5">
                            {progsData &&
                                progsData.map((item: ProgItem, index: number) => (
                                    <div className="w-full" key={index}>
                                        <div className="flex flex-col gap-3 rounded-lg border border-border p-6">
                                            <div className="flex items-center gap-4">
                                                <Image
                                                    className="rounded-md"
                                                    src={item?.icon || "https://i.imgur.com/YPmxG4Y.jpeg"}
                                                    alt="Miniature du programme"
                                                    width={100}
                                                    height={100}
                                                />
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
                                            <div className="justify-center">
                                                <p className="line-clamp-3 overflow-hidden text-sm text-muted-foreground">
                                                    {item?.description || "Description non trouvée"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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
                                onClick={() => setTab(item.value)}
                                className={`justify-start gap-3 text-base text-muted-foreground hover:text-primary ${
                                    tab === item.value && "text-primary"
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
                    if (tab === item.value) {
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
