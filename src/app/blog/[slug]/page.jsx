"use client";

import { posts } from "@/lib/data";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function SingleBlog() {
  const { slug } = useParams();
  const title = slug.replaceAll("-", " ");

  const [post, setPost] = useState(null);

  useEffect(() => {
    setPost(posts.find((post) => post.title === title));
  }, [title]);

  return (
    <div className="flex gap-20">
      <Image
        src={post?.image}
        alt={post?.title}
        width={300}
        height={100}
        className="object-cover h-[calc(100vh-200px)]"
      />
      <div className="flex flex-col gap-10">
        <h6 className="font-medium text-5xl">{post?.title}</h6>
        <div className="flex gap-5">
          <div>
            <Image
              src={post?.profile}
              alt={post?.title}
              width={50}
              height={50}
              className="object-cover rounded-full "
            />
          </div>
          <div className="flex gap-5">
            <div>
              <p className="text-gray-400 mb-1">Author</p>
              <p className="font-bold">{post?.author}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Published</p>
              <p className="font-bold">{post?.date}</p>
            </div>
          </div>
        </div>
        <p className="text-gray-300 max-w-xl text-sm">{post?.description}</p>
      </div>
    </div>
  );
}

export default SingleBlog;
