import React from "react";

export const getSinglePost = async (post_id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${post_id}`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const p = await params;
  //   console.log(p.id);
  const singlePost = await getSinglePost(p.id);
  return <div>Single Post {JSON.stringify(singlePost)}</div>;
};

export default page;
