"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

function NavLinks({ setOpen }) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          onClick={() => setOpen(false)}
          className={`${
            pathname === link.path && "bg-gray-50 text-gray-800 rounded-2xl"
          } font-medium hover:text-gray-300 px-3.5 py-1 flex items-center justify-center`}
        >
          {link.title}
        </Link>
      ))}
      <div className="flex flex-col md:flex-row items-center gap-2 md:ml-5">
        {session?.user.isAdmin && (
          <Link
            className="font-medium hover:text-gray-300 px-3.5 py-1.5 flex items-center justify-center"
            href={"/admin"}
          >
            Admin
          </Link>
        )}
        <div className="mt-5 md:mt-0" onClick={() => setOpen(false)}>
          {session?.user ? (
            <div className="flex gap-5 md:flex-row flex-col items-center">
              <span className="text-sky-400 font-bold">
                Hello, {session?.user?.email.split("@")[0].toUpperCase()}
              </span>
              <button
                onClick={() => signOut()}
                className="font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all px-2 rounded-sm py-0.5 flex items-center justify-center"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-5 md:flex-row flex-col">
              <Link
                className="font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all px-2 rounded-sm py-0.5 flex items-center justify-center"
                href={"/login"}
              >
                Login
              </Link>
              <Link
                className="font-medium hover:bg-gray-300 transition-all px-2 rounded-sm py-0.5 flex items-center justify-center"
                href={"/register"}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavLinks;
