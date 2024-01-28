import { Post } from "@/lib/models";
import connectDB from "@/lib/utilies";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    connectDB();
    const post = await Post.findOne(slug);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(error);
  }
};

// export const DELETE = async () => {};
