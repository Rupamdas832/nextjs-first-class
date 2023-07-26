import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  let data = [];
  try {
    const res = await fetch("http://localhost:3000/posts");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: { posts: data },
  };
}

const SSRHome = ({ posts }) => {
  return (
    <div>
      <h1>SSR Home page</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/ssr/${post.id}`}>Read more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default SSRHome;
