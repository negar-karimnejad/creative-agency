import BlogCard from "@/components/blog-card/BlogCard";
import { getPosts } from "@/lib/data";

export const metadata = {
  title: "Blog Page",
  description: "Blog page description",
};

async function Blog() {
  const posts = await getPosts();
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {posts?.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
