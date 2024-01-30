"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { GithubLoginButton } from "react-social-login-buttons";

function LoginForm() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      await signIn("credentials", { username, password, callbackUrl: false });
    } catch (error) {
      console.log("Error:", error);
      if (!error.message.includes("CredentialsSignIn")) {
        setErrorMessage("Invalid username or password");
        return { error: "Invalid username or password" };
      }
      setErrorMessage({ error: error.message });

      throw { error: error.message };
    }
  };

  return (
    <form
      action={handleLogin}
      className="text-center bg-slate-700 p-8 mx-auto rounded-md max-w-md"
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
      <button className="mb-2 bg-sky-800 w-full p-3 rounded-md transition-all font-medium hover:bg-sky-700">
        Login
      </button>
      <GithubLoginButton className="w-full" onClick={() => signIn("github")} />
      <div className="my-3 text-yellow-300">{errorMessage}</div>
      <Link href="/register" className="text-sm">
        Don&apos;t have an account? <b>Register</b>
      </Link>
    </form>
  );
}

export default LoginForm;
