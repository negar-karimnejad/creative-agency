import Link from "next/link";
import Links from "./links/Links";

function Navbar() {
  return (
    <nav className="text-white py-8 sticky top-0 bg-[#0d0c22] z-40 h-fit w-full shadow shadow-slate-700 mb-10">
      <div className="flex justify-between items-center container mx-auto px-10">
        <Link href="/" className="text-xl font-bold">
          Lama
        </Link>
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
