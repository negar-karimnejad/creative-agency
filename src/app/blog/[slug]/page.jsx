import BlogUser from "@/components/blog-user/BlogUser";
import { posts } from "@/lib/data";
import Image from "next/image";
import { Suspense } from "react";

async function SingleBlog({ params }) {
  const { slug } = params;

  const post = posts.find(
    (post) => post.title.toLocaleLowerCase() === slug.replaceAll("-", " ")
  );

  return (
    <div className="flex flex-col-reverse md:text-left text-center md:flex-row gap-12 mt-10">
      <Image
        src={post?.image}
        alt={post?.title}
        width={350}
        height={100}
        className="object-cover h-[calc(100vh-200px)] md:mx-0 mx-auto"
      />
      <div className="flex flex-col">
        <h6 className="font-medium text-5xl mb-10">{post?.title}</h6>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogUser userId={post.userId} />
        </Suspense>
        <p className="text-gray-300 max-w-2xl text-sm">{post?.description}</p>
      </div>
    </div>
  );
}

export default SingleBlog;

// export const generateMetadata = async ({ params }) => {
//   const title = params.slug.replaceAll("-", " ");
//   const post = await getPost(title);

//   return {
//     title,
//     description: post?.description || "Generated by create next app",
//   };
// };
