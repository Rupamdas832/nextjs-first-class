import { comments } from "@/app/data/comments";
import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  const requiredComments = postId
    ? comments.filter((comment) => comment.postId === Number(postId))
    : comments;

  return NextResponse.json(requiredComments);
}
