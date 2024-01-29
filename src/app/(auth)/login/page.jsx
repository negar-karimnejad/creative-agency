"use client";

import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import { GithubLoginButton } from "react-social-login-buttons";
export default function LoginPage() {
  const { data: session } = useSession();
  console.log(session);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signIn("credentials", { username, password });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <form
        action={handleLogin}
        className="bg-slate-700 p-8 mx-auto rounded-md max-w-md"
      >
        <input
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
        />
        <button
          type="submit"
          className="mb-2 bg-sky-800 w-full p-3 rounded-md transition-all font-medium hover:bg-sky-700"
        >
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
