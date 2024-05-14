
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/app/(models)/User";
import Pilot from "@/app/(models)/Pilot";
import Admin from "@/app/(models)/Admin";
import bcrypt from "bcrypt";

export const options = {
  providers: [
    // GitHubProvider({
    //   profile(profile) {
    //     console.log("Profile GitHub: ", profile);

    //     let userRole = "GitHub User";
    //     if (profile?.email == "ashutoshtiwari8172@gmail.com") {
    //       userRole = "admin";
    //     }

    //     return {
    //       ...profile,
    //       role: userRole, 
    //     };
    //   },
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_Secret,
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
          let foundUser = await User.findOne({ email: credentials.email }).lean().exec();

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
      return token;
    },
    async session({ session, token }) {
      if (session?.user) session.user.role = token.role;
      return session;
    },
  },
};
