import Link from "next/link";

import config from "../config/config.json";

export const Footer = () => {
    return (
        <footer className="bg-card">
            <div className="max-w-4xl flex-wrap w-full flex gap-4 m-auto px-4 mt-4 py-24">
                <div className="w-full flex justify-between max-lg:flex-col">
                    <div className="flex flex-col gap-4">
                        <div className="space-y-1">
                            <h3 className="text-xl font-semibold">B-Pump</h3>
                            <p>Votre coach sportif</p>
                        </div>
                        <p className="text-sm text-muted-foreground italic">
                            &copy; {new Date().getFullYear()} B-Pump - All rights reserved
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        {config.link.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="text-sm text-muted-foreground hover:underline"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
