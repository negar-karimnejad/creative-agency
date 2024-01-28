import BlogCard from "@/components/blog-card/BlogCard";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog");
  if (!res.ok) {
    throw new Error("somethig went wrong!");
  }
  return res.json();
};

async function Blog() {
  const posts = await getData();

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
