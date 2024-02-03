import { User } from "@/lib/models";
import connectDB from "@/lib/utilies";
import bcrypt from "bcrypt";
import nextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

export const authOptions = {
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your-cool-username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your-awesome-password",
        },
      },
      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({ username: credentials.username });
        if (!user || !user?.password) {
          throw new Error("Invalid credentials");
        }
        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        connectDB();
        try {
          const existedUser = await User.findOne({ email: user.email });

          if (!existedUser) {
            const newUser = new User({
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });
            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
  },
};

const handler = nextAuth(authOptions);
export { handler as GET, handler as POST };
