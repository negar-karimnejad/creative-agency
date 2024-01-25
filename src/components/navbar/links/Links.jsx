"use client";
import menuImage from "../../../../public/menu.png";
import Image from "next/image";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { title: "Homepage", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

function Links() {
  const pathname = usePathname();

  const session = true;
  const isAdmin = true;

  return (
    <div className="md:gap-1 md:flex hidden items-center">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            pathname === link.path && "bg-gray-50 text-gray-800 rounded-2xl"
          } font-medium hover:text-gray-300 px-3.5 py-1.5 flex items-center justify-center`}
        >
          {link.title}
        </Link>
      ))}
      <div className="ml-5 flex gap-2">
        {isAdmin && (
          <Link
            className="font-medium hover:text-gray-300 px-3.5 py-1.5 flex items-center justify-center"
            href={"/admin"}
          >
            Admin
          </Link>
        )}
        {session ? (
          <Link
            className="font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all px-2 rounded-sm py-0.5 flex items-center justify-center"
            href={"/logout"}
          >
            Logout
          </Link>
        ) : (
          <Link
            className="font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all px-2 rounded-sm py-0.5 flex items-center justify-center"
            href={"/login"}
          >
            Login
          </Link>
        )}
      </div>
      <div>
        <Image src={menuImage} alt="menu" width={20} height={20} />
      </div>
    </div>
  );
}

export default Links;
