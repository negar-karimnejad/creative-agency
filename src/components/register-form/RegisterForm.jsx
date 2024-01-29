"use client";

import { useFormState } from "react-dom";
import { register } from "@/lib/actions";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterForm() {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form
      action={formAction}
      className="bg-slate-700 p-8 mx-auto text-center rounded-md max-w-md"
    >
      <input
        type="text"
        name="username"
        placeholder="username"
        className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirm password"
        className="mb-4 placeholder:text-gray-600 bg-slate-900 outline-none text-white p-3 rounded-md w-full"
      />
      <button className="bg-sky-800 w-full p-2 rounded-md transition-all font-medium hover:bg-sky-700">
        Register
      </button>
      <div className="my-3 text-yellow-300">{state?.error}</div>
      <Link href="/login" className="text-sm">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}

export default RegisterForm;
