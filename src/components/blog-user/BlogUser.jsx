import { getUser } from "@/lib/data";
import Image from "next/image";
import React from "react";

async function BlogUser({ userId }) {
  const user = await getUser(userId);

  return (
    <div className="flex items-center md:justify-start justify-center gap-x-5 mb-10">
      <Image
        src={user?.profile}
        alt={user?.author}
        width={50}
        height={50}
        className="object-cover rounded-full "
      />
      <div className="text-sm text-left">
        <p>
          <span className="text-gray-400 mb-1">Author: </span>
          <span className="font-bold">{user?.author}</span>
        </p>
        <p>
          <span className="text-gray-400 mb-1">Published: </span>
          <span className="font-bold">2024.12.25</span>
        </p>
      </div>
    </div>
  );
}

export default BlogUser;
