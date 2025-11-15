import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
  return <div>{JSON.stringify(data)}</div>;
};

export default page;
