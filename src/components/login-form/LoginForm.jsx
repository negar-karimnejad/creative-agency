"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import toast from "react-hot-toast";
import { GithubLoginButton } from "react-social-login-buttons";

function LoginForm() {
  const router = useRouter();
  const formRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });
      if (result?.error) {
        throw new Error(result.error);
      }
      toast.success("Authentication successful");
      router.refresh;
      router.push("/");
    } catch (error) {
      toast.error(error.message || "Authentication failed");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      ref={formRef}
      className="text-center bg-slate-700 p-8 mx-auto rounded-md max-w-md"
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
      <GithubLoginButton className="w-full" onClick={() => signIn("github")} />
      <Link href="/register" className="text-sm">
        Don&apos;t have an account? <span className="underline">Register</span>
      </Link>
    </form>
  );
}

export default LoginForm;
