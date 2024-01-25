import Links from "./links/Links";

function Navbar() {
  return (
    <nav className="text-white py-8">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Lama</h1>
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
