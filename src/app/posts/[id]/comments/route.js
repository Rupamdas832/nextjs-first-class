import { comments } from "@/app/data/comments";
import { posts } from "@/app/data/posts";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const requiredComments = comments.filter(
    (comment) => comment.postId === Number(params.id)
  );

  return NextResponse.json(requiredComments);
}
