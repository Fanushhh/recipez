import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import Nodemailer from "next-auth/providers/nodemailer"
import Discord from "next-auth/providers/discord"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Nodemailer({
    server: process.env.EMAIL_SERVER,
    from: process.env.EMAIL_FROM,
  }),Discord({
    clientId: process.env.AUTH_DISCORD_ID,
    clientSecret: process.env.AUTH_DISCORD_SECRET,

  })],
  debug:true,
})