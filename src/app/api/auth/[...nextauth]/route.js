import { User } from "@/lib/models";
import connectDB from "@/lib/utilies";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";

const login = async (credentials) => {
  try {
    connectDB();
    const user = await User.findOne({ username: credentials.username });

    if (!user) {
      return new Error("User Not Found");
    }

    const isPasswordCorrect = bcrypt.compareSync(
      credentials?.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return new Error("Wrong Credentials!");
    }

    return user;
  } catch (error) {
    console.log(error);
    return new Error("Faild to login");
  }
};

const handler = NextAuth({
  providers: [
    Github({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

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
});

export { handler as GET, handler as POST };
