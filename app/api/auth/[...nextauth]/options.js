// /app/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import Pilot from "@/app/(models)/Pilot";
import Admin from "@/app/(models)/Admin";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@example.com" },
        password: { label: "Password", type: "password", placeholder: "Password" },
      },
      async authorize(credentials) {
        try {
          let user = await User.findOne({ email: credentials.email }).lean().exec();
          if (!user) user = await Pilot.findOne({ email: credentials.email }).lean().exec();
          if (!user) user = await Admin.findOne({ email: credentials.email }).lean().exec();

<<<<<<< HEAD
          // If user not found in User collection, try finding in Pilot collection
          if (!foundUser) {
            foundUser = await Pilot.findOne({ email: credentials.email }).lean().exec();
          }
          if (!foundUser) {
            foundUser = await Admin.findOne({ email: credentials.email }).lean().exec();
          }
          

          if (foundUser) {
            console.log("User Exists");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );

            if (match) {  
              console.log("Good Pass");
              delete foundUser.password;

              // Fetch role from MongoDB and include it in the returned object
              const userRole = foundUser.role; // Fetch the role from the foundUser object

              return {
                ...foundUser,
                role: userRole,
              };
=======
          if (user) {
            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
            if (isValidPassword) {
              return { ...user, role: user.role };
>>>>>>> origin/main
            }
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(options);
