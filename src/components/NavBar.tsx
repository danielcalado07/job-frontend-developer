"use client";
import { useDrawer } from "@/context/DrawerContext";
import Link from "next/link";

export default function NavBar() {
  const { toggleDrawer } = useDrawer();

  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-white text-lg font-semibold hidden md:block"
        >
          Chat Bot
        </Link>
        <button className="md:hidden" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
