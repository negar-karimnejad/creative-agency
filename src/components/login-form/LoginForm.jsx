"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { GithubLoginButton } from "react-social-login-buttons";

function LoginForm() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    // e.preventDefault();
    try {
      await signIn("credentials", { username, password });
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const [state, formAction] = useFormState(handleLogin, undefined);

  useEffect(() => {
    state?.success && router.push("/");
  }, [state?.success, router]);
  
  return (
    <form
      action={formAction}
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
      <button
        type="submit"
        className="mb-2 bg-sky-800 w-full p-3 rounded-md transition-all font-medium hover:bg-sky-700"
      >
        Login
      </button>
      <GithubLoginButton className="w-full" onClick={() => signIn("github")} />
      <div className="my-3 text-yellow-300">{state?.error}</div>
      <Link href="/register" className="text-sm">
        Don&apos;t have an account? <b>Register</b>
      </Link>
    </form>
  );
}

export default LoginForm;
