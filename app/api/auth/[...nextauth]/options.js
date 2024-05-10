import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import Pilot from "@/app/(models)/Pilot";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile GitHub: ", profile);

        let userRole = "GitHub User";
        if (profile?.email == "ashutoshtiwari8172@gmail.com") {
          userRole = "admin";
        }

        return {
          ...profile,
          role: userRole, 
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    // GoogleProvider({
    //   profile(profile) {
    //     console.log("Profile Google: ", profile);

    //     let userRole = "Google User";
    //     return {
    //       ...profile,
    //       id: profile.sub,
    //       role: userRole,
    //     };
    //   },
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_Secret,
    // }),
    CredentialsProvider({
      name: "Credentials",
      
      credentials: {
        email: {
          label: "email:",
          type: "text",
          placeholder: "your-email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
         try {
        //   const foundUser = await User.findOne({ email: credentials.email })
        //     .lean()
        //     .exec();
        let foundUser = await User.findOne({ email: credentials.email }).lean().exec();

        // If user not found in User collection, try finding in Pilot collection
        if (!foundUser) {
          foundUser = await Pilot.findOne({ email: credentials.email }).lean().exec();
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

              foundUser["role"] = "Unverified Email";
              return foundUser;
            }
          }
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      if (Pilot) token.role = Pilot.role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      if (session?.Pilot) session.Pilot.role = token.role;
      return session;
    },
  },
};
