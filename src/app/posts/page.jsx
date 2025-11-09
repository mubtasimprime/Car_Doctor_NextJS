import Link from "next/link";
import React from "react";

export const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const Posts = async () => {
  const posts = await getPosts();
  return (
    <div className="space-y-4">
      {posts.map((data) => {
        return (
          <>
            <div key={data.id}>
              <p className="border border-red-300">{data.title}</p>
              <p className="border border-red-300">{data.body}</p>
              <Link
                className="border border-green-500"
                href={`/posts/${data.id}`}
              >
                Details
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
