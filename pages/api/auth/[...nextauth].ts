import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            type: "credentials",
            credentials: {
                username: { label: "Nom d'utilisateur", type: "text" },
                password: { label: "Mot de passe", type: "password" },
            },
            async authorize(credentials) {
                try {
                    if (!credentials) {
                        return null;
                    }
                    return { id: "1", name: "pierre" };
                } catch (error) {
                    console.error("Authentication error :", error);
                    return null;
                }
            },
        }),
    ],
};

export default NextAuth(authOptions);
