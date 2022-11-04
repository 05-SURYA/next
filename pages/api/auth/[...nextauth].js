import NextAuth from "next-auth/next";
import GitHubProvider from 'next-auth/providers/github'
import clientPromise from '../../../lib/mongoDb';
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
    providers: [
        GitHubProvider({
            clientId:process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    session:{
        strategy:"jwt"
    },
    callbacks: {
        async jwt({token,user}){
            if(user){
                token.id = user.id
            }
            return token
        },
        async session({session,token}){
            session.user.id = token.id
            return session
        }
    }
})