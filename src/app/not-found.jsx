"use client";
import React from "react";
import ErrorPage from "../assets/images/404.png";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <img
          src={ErrorPage.src}
          alt="404 Image"
          width={700}
          height={300}
          placeholder="blur"
        />
        <div className="flex justify-center items-center">
          <Link
            href={"/"}
            className="mt-10 border border-red-500 text-red-500 py-1 px-2.5 cursor-pointer hover:bg-red-500 hover:text-white transition duration-300"
            type="button"
          >
            Go Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
