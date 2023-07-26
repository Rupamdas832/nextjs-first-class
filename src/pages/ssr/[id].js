import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { query } = context;
  const { id } = query;

  let post = null;
  let comments = [];
  try {
    const res = await fetch(`http://localhost:3000/posts/${id}`);
    post = await res.json();
  } catch (error) {
    console.log(error);
  }

  try {
    const res = await fetch(`http://localhost:3000/posts/${id}/comments`);
    comments = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: { post, comments },
  };
}

const Post = ({ post, comments }) => {
  return (
    <div>
      <h1>SSR post {id}</h1>
      {post ? (
        <div>
          <h3>{post.title}</h3>
          <h5>{post.body}</h5>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h3>Comments</h3>
      {comments.map((comment) => {
        return (
          <div id={comment.id}>
            <h5>{comment.email}</h5>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
