"use client";

import { register } from "@/lib/actions";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function RegisterForm() {
  const { data: session } = useSession();
  const router = useRouter();
  const ref = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (session?.user) {
      router.push("/login");
    }
  }, [session?.user, router]);

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    const result = await register(formData);

    if (result?.existedUser) {
      toast.error(result?.existedUser);
    } else if (result?.error) {
      toast.error(result?.error);
    } else {
      toast.success("Welcome🎉, Please Sign In");
      setIsSubmitting(false);
      ref.current?.reset();
      router.push("/login");
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleSubmit(formData);
      }}
      className="bg-slate-700 p-8 mx-auto text-center rounded-md max-w-md"
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full`}
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className={`${
          isSubmitting && "opacity-50 cursor-default"
        } bg-sky-800 w-full p-2 rounded-md transition-all font-medium hover:bg-sky-700 mb-2
        `}
      >
        {isSubmitting ? "Loading..." : "Register"}
      </button>
      <Link href="/login" className="text-sm">
        Have an account? <span className="underline">Login</span>
      </Link>
    </form>
  );
}

export default RegisterForm;
