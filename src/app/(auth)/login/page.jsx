"use client";

import { login } from "@/lib/actions";
import { signIn, useSession } from "next-auth/react";
import { GithubLoginButton } from "react-social-login-buttons";

export default function LoginPage() {
  const { data: session } = useSession();
console.log(session);
  return (
    <div>
      <form
        action={login}
        className="bg-slate-700 p-8 mx-auto rounded-md max-w-md"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
        />
        <button className="mb-2 bg-sky-800 w-full p-3 rounded-md transition-all font-medium hover:bg-sky-700">
          Login
        </button>
        <GithubLoginButton
          className="w-full"
          onClick={() => signIn("github")}
        />
      </form>
    </div>
  );
}
