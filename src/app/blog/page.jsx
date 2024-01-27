import BlogCard from "@/components/blog-card/BlogCard";
import { posts } from "@/lib/data";

function Blog() {
  return (
    <div className="grid grid-cols-3 gap-y-10">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Blog;
