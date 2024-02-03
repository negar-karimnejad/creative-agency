"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { GithubLoginButton } from "react-social-login-buttons";

function LoginForm() {
  const router = useRouter();
  const formRef = useRef(null);
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (session?.user) {
      router.push("/");
    }
  }, [session?.user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
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
      setIsSubmitting(false);
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
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
        disabled={isSubmitting}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
        disabled={isSubmitting}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-2 bg-sky-800 w-full p-3 rounded-md transition-all font-medium hover:bg-sky-700
        `}
      >
        {isSubmitting ? "Loading..." : "Login"}
      </button>
      <GithubLoginButton className="w-full" onClick={() => signIn("github")} />
      <Link href="/register" className="text-sm">
        Don&apos;t have an account? <span className="underline">Register</span>
      </Link>
    </form>
  );
}

export default LoginForm;
