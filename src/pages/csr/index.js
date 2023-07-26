import Link from "next/link";
import { useEffect, useState } from "react";

const CSRHome = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>CSR Home page</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link href={`/csr/${post.id}`}>Read more...</Link>
          </div>
        );
      })}
    </div>
  );
};

export default CSRHome;
