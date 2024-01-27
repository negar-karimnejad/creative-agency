"use server";

import connectDB from "./utilies";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {
  const { title, description, userId, slug } = Object.fromEntries(formData);

  try {
    connectDB();

    const newPost = new Post({
      title,
      description,
      userId,
      slug,
    });

    await newPost.save();
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectDB();
    await Post.findOneAndDelete(id);
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
  }
};
