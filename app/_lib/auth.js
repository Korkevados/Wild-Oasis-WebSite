/** @format */

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      console.log("Enters");
      try {
        console.log(user.email);
        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          console.log("not in");
          const newGuest = await createGuest({
            email: user.email,
            fullName: user.name,
          });
          console.log(newGuest);
        }
        return true;
      } catch (error) {
        console.log("error:", error);
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
