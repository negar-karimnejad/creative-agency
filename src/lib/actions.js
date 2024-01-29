"use server";

import bcrypt from "bcryptjs";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import connectDB from "./utilies";

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
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
  }
};

export const register = async (formData) => {
  const { username, email, password, confirmPassword } =
    Object.fromEntries(formData);
  if (password !== confirmPassword) {
    throw new Error("Passwords do not match.");
  }
  try {
    connectDB();

    const existedUser = await User.findOne({ username });

    if (existedUser) {
      throw new Error("User already registered");
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
  }
};
