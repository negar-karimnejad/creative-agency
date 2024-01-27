import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogCard({ post }) {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="w-[370px] flex items-center relative">
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={100}
          className="object-cover h-[calc(100vh-200px)]"
        />
        <p className="[rotate:270deg] min-w-fit text-gray-400 font-bold text-sm absolute right-0">
          {post.date}
        </p>
      </div>
      <h6 className="font-bold text-lg">{post.title}</h6>
      <p className="text-sm text-gray-400">{post.description}</p>
      <Link
        className="underline text-sm"
        href={`/blog/${post.title.replaceAll(" ", "-")}`}
      >
        READ MORE
      </Link>
    </div>
  );
}

export default BlogCard;
