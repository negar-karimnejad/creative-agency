import Links from "./links/Links";

function Navbar() {
  return (
    <nav className="text-white p-4">
      <div className="flex justify-between items-center container px-24">
        <h1 className="text-xl font-bold">Lama</h1>
        <Links />
      </div>
    </nav>
  );
}

export default Navbar;
