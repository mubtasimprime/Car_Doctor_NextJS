"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  // Hide navbar on dashboard routes and error pages
  const shouldHideNavbar = pathname.includes("dashboard");

  if (shouldHideNavbar) {
    return null;
  }

  const navItems = (
    <>
      <li>
        <Link
          href={"/"}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href={"/services"}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href={"/blog"}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          href={"/contact"}
          className="text-gray-700 hover:text-red-500 font-medium transition-colors"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <section className="navbar bg-white my-10 px-4 lg:px-8">
      <div className="flex justify-between items-center w-full">
        {/* Your existing navbar JSX */}
        <Link href={"/"}>
          <img src="/logo.svg" alt="logo" width={87} height={107} />
        </Link>

        <div className="hidden lg:flex justify-center items-center">
          <ul className="flex items-center justify-center gap-12">
            {navItems}
          </ul>
        </div>

        <div className="flex justify-end items-center space-x-4">
          <div className="space-x-4 hidden md:flex">
            <button className="btn btn-circle">
              <FaSearch className="text-gray-600 text-lg" />
            </button>
            <button className="btn btn-circle">
              <FaUser className="text-gray-600 text-lg" />
            </button>
          </div>

          <button className="btn bg-white text-red-500 border-red-500 hover:bg-red-600 hover:text-white transition duration-300 font-semibold">
            Appointment
          </button>

          <div className="dropdown dropdown-end lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
              <li className="divider"></li>
              <li>
                <a>
                  <FaSearch className="mr-2" />
                  Search
                </a>
              </li>
              <li>
                <a>
                  <FaUser className="mr-2" />
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
