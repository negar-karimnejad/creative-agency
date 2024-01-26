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

  const session = true;
  const isAdmin = true;

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
    </>
  );
}

export default NavLinks;
