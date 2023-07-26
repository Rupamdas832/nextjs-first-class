import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Post = () => {
  const { query } = useRouter();
  const id = query["id"];
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}`);
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = async () => {
    try {
      const res = await fetch(`http://localhost:3000/posts/${id}/comments`);
      const data = await res.json();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPost();
    fetchComments();
  }, [id]);

  return (
    <div>
      <h1>CSR post {id}</h1>
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
