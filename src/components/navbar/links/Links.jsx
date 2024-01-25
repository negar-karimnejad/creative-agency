import Link from "next/link";

function Links() {
  const links = [
    { title: "", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
    { title: "Admin", path: "/admin" },
    { title: "Logout", path: "/logout" },
  ];

  return (
    <div className="flex space-x-4">
      {links.map((link, index) => (
        <Link key={index} href={link.path} className="hover:text-gray-300">
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Links;
