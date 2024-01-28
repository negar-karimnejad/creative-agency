import { addPost, deletePost } from "@/lib/actions";

function Create() {
  return (
    <>
      <form action={addPost}>
        <input
          className="text-gray-700"
          type="text"
          placeholder="title"
          name="title"
        />
        <input
          className="text-gray-700"
          type="text"
          placeholder="description"
          name="description"
        />
        <input
          className="text-gray-700"
          type="text"
          placeholder="userId"
          name="userId"
        />
        <input
          className="text-gray-700"
          type="text"
          placeholder="slug"
          name="slug"
        />
        <button type="submit">create</button>
      </form>
      <form action={deletePost}>
        <input type="text" className="text-gray-700" placeholder="postId" name="id" />
        <button type="submit">Delete</button>
      </form>
    </>
  );
}

export default Create;
