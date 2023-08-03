import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
        expires: '12d'
    },
    pages: {
        // signIn: 'http://localhost:3000/',
        signIn: "https://errordeve.vercel.app/signin",
        // signOut: 'http://localhost:3000/',
        signOut:'https://errordeve.vercel.app',
        error: '/auth/error', // Error code passed in query string as ?error=  build a better error page
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will b  
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }