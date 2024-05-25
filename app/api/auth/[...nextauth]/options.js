// // /app/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/app/(models)/User";
// import Pilot from "@/app/(models)/Pilot";
// import Admin from "@/app/(models)/Admin";
// import bcrypt from "bcrypt";

// export const options = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "email@example.com" },
//         password: { label: "Password", type: "password", placeholder: "Password" },
//       },
//       async authorize(credentials) {
//         try {
//           let user = await User.findOne({ email: credentials.email }).lean().exec();
//           if (!user) user = await Pilot.findOne({ email: credentials.email }).lean().exec();
//           if (!user) user = await Admin.findOne({ email: credentials.email }).lean().exec();

//           if (user) {
//             const isValidPassword = await bcrypt.compare(credentials.password, user.password);
//             if (isValidPassword) {
//               return { ...user, role: user.role };
//             }
//           }
//         } catch (error) {
//           console.error(error);
//         }
//         return null;
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.role = user.role;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.role = token.role;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: '/login',
//   },
// };

// export default NextAuth(options);
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

          if (user) {
            const isValidPassword = await bcrypt.compare(credentials.password, user.password);
            if (isValidPassword) {
              // Add pilotId and airline only if the user is a pilot
              if (user.role === 'pilot') {
                return {
                  ...user,
                  role: user.role,
                  airline: user.airline,
                  pilotId: user.pilotId,
                };
              }
              return { ...user, role: user.role };
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
        if (user.role === 'pilot') {
          token.airline = user.airline;
          token.pilotId = user.pilotId;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        if (token.role === 'pilot') {
          session.user.airline = token.airline;
          session.user.pilotId = token.pilotId;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(options);
