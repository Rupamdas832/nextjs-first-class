import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const requiredPost = posts.find((post) => post.id === Number(params.id));
  if (!requiredPost) return NextResponse.json({ error: "Post not found" });

  return NextResponse.json(requiredPost);
}

export async function PUT(req, { params }) {
  const requiredPost = posts.find((post) => post.id === Number(params.id));
  const requestBody = await req.json();

  if (!requiredPost) return NextResponse.json({ error: "Post not found" });

  const updatedPost = {
    ...requiredPost,
    ...requestBody,
  };
  posts[requiredPost.id] = updatedPost;

  return NextResponse.json(updatedPost);
}
