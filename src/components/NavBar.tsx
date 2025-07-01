"use client";
import { useDrawer } from "@/context/DrawerContext";
import Link from "next/link";
import * as Switch from "@radix-ui/react-switch";
import sun from "@/assets/sun.svg";
import moon from "@/assets/moon.svg";
import { useEffect, useState } from "react";
import { storage } from "@/utils/useLocalStorage";

export default function NavBar() {
  const { toggleDrawer } = useDrawer();
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (!storage.getItem("theme")) {
      storage.setItem("theme", "dark");
    }
    const savedTheme = storage.getItem("theme");
    setChecked(savedTheme === "dark");
  }, []);

  useEffect(() => {
    storage.setItem("theme", checked ? "dark" : "light");
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "dark" : "light",
    );
  }, [checked]);

  return (
    <nav className="dark:bg-gray-800 bg-gray-300 p-4 shadow-md dark:shadow-gray-950 shadow-gray-400">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="dark:text-white text-gray-900 text-lg font-semibold hidden md:block"
        >
          Chat Bot
        </Link>
        {/* Mobile menu button */}
        <button className="md:hidden" onClick={toggleDrawer}>
          <svg
            className="w-6 h-6 dark:text-white text-gray-900"
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
          <Switch.Root
            className="relative h-[25px] w-[42px] cursor-pointer rounded-full dark:bg-gray-500 bg-gray-300 border-1 border-gray-600 dark:border-gray-300 outline-none"
            id="airplane-mode"
            checked={checked}
            onCheckedChange={setChecked}
          >
            <Switch.Thumb
              className={`block size-[21px] rounded-full dark:bg-gray-800 bg-gray-50 shadow-blackA4 transition-transform duration-100 p-1 will-change-transform relative ${
                checked ? "translate-x-[19px]" : "translate-x-0.5"
              }`}
            >
              <img
                src={checked ? moon.src : sun.src}
                alt={checked ? "Moon" : "Sun"}
                //className="absolute left-1 top-1 w-3.5 h-3.5"
              />
            </Switch.Thumb>
          </Switch.Root>
        </div>
      </div>
    </nav>
  );
}
