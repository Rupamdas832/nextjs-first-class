import { NextResponse } from "next/server";
import { posts } from "../data/posts";

export async function GET(req, res) {
  return NextResponse.json(posts);
}

export async function POST(req) {
  const requestBody = await req.json();

  const newPost = {
    ...requestBody,
    id: posts.length,
  };
  posts.push(newPost);

  return NextResponse.json(newPost);
}
