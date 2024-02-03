"use server";

import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import connectDB from "./utilies";

export const addPost = async (formData) => {
  const { title, description, userId, slug, image } =
    Object.fromEntries(formData);

  try {
    connectDB();

    const newPost = new Post({
      title,
      description,
      userId,
      slug,
      image,
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
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const register = async (formData) => {
  try {
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    try {
      connectDB();

      const existedUser = await User.findOne({ username });

      if (existedUser) {
        throw new Error("You are already a member");
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = new User({
        username,
        email,
        password: hashedPassword,
      });

      await newUser.save();
      revalidatePath("/");
    } catch (existedUser) {
      return { existedUser: "You are already a member, please sign in" };
    }
  } catch (error) {
    return { error: error.message };
  }
};
