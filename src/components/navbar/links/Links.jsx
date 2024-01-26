"use client";
import Image from "next/image";
import menuImage from "../../../../public/menu.png";

import { useState } from "react";
import NavLinks from "../navLinks/NavLinks";

function Links() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="md:gap-1 md:flex hidden items-center">
        <NavLinks />
      </div>
      <div
        className="block md:hidden cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <Image src={menuImage} alt="menu" width={20} height={20} />
      </div>
      {open && (
        <div className="relative">
          <div className="bg-[#0d0c22] shadow-md shadow-slate-600  h-screen w-56 flex flex-col gap-4 md:hidden items-center justify-center absolute -right-[40px] top-1">
            <NavLinks setOpen={setOpen} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Links;
