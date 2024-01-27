import { addPost, deletePost } from "@/lib/actions";

function Create() {
  return (
    <>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="description" name="description" />
        <input type="text" placeholder="userId" name="userId" />
        <input type="text" placeholder="slug" name="slug" />
        <button type="submit">create</button>
      </form>
      <form action={deletePost}>
        <input type="text" placeholder="postId" name="id" />
        <button type="submit">Delete</button>
      </form>
    </>
  );
}

export default Create;
