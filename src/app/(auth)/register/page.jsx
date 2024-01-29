import { register } from "@/lib/actions";

function Register() {
  return (
    <form
      action={register}
      className="bg-slate-700 p-8 mx-auto rounded-md max-w-md"
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
    </form>
  );
}

export default Register;
