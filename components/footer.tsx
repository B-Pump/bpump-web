import { IconBrandGithub, IconBrandInstagram, IconBrandTiktok } from "@tabler/icons-react";
import Link from "next/link";
import config from "@/config/config.json";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Medal } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-muted py-12 text-white">
            <div className="container mx-auto flex flex-col items-center justify-between md:flex-row md:items-start">
                <div className="mb-4 md:mb-0">
                    <Link href='/' className="mr-20 flex"><Medal/>{' '}B-Pump</Link>
                </div>
                <div className="flex flex-col gap-4 md:items-center">
                    <h3 className="text-xl font-bold">Réseaux :</h3>
                    <div className="flex gap-4">
                        <ul className="space-y-5">
                            <li>
                                <Link href="https://www.instagram.com/b.pump76/" target="_blank" passHref>
                                    <button className="flex hover:text-gray-400">
                                        Instagram :<IconBrandInstagram className="ml-1 text-3xl" />
                                    </button>
                                </Link>
                            </li>
                            <li>
                                <Link href="#" passHref>
                                    <button className="flex hover:text-gray-400">
                                        Tiktok :<IconBrandTiktok className="ml-1 text-3xl" />
                                    </button>
                                </Link> 
                            </li>
                            <li>
                                <Link href="https://github.com/B-Pump" target="_blank" passHref>
                                    <button className="flex hover:text-gray-400">
                                        Github :<IconBrandGithub className="ml-1 text-3xl" />
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-bold">Liens utiles :</h3>
                    <ul>
                        {config.link.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "hover:underline",
                                        buttonVariants({
                                            variant: "ghost",
                                        }),
                                    )}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-bold">Crédits :</h3>
                    <ul className="space-y-5">
                        <li>
                            <a href="#" className="hover:underline">Site inspirant 1</a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">Site inspirant 2</a>
                        </li>
                        {/* Ajoutez autant de liens que nécessaire */}
                    </ul>
                </div>
                <div>
                    <h3 className="mb-4 text-xl font-bold">Aide :</h3>
                    <ul className="space-y-5">
                        <li>
                            <Link href="/faq" className="hover:underline">FAQ</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                        <li>
                            <Link href="/privacy" className="hover:underline">Politique de confidentialité</Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:underline">Termes d'utilisation</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="ml-4 mt-4 md:ml-10 md:mt-0">
                Fait par :{" "}
                <Link href="https://github.com/wiizzl" className="font-bold hover:underline">
                    Pierre
                </Link>{" "}
                et{" "}
                <Link href="https://github.com/Neipe-the-Patatitator" className="font-bold hover:underline">
                    Galaad
                </Link>
            </p>
        </footer>
    );
}
