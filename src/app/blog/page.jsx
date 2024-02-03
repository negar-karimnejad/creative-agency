import BlogCard from "@/components/blog-card/BlogCard";
import { posts } from "@/lib/data";

async function Blog() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
      {posts?.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Blog;

export const metadata = {
  title: "Blog Page",
  description: "Blog page description",
};
