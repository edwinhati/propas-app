"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProfile } from "@/config";

interface User {
  name: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [profile, setProfile] = useState<User>({
    name: "",
  });
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      setProfile(await getProfile());
    };

    fetchProfile();
  }, []);

  return (
    <nav className="bg-white border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image
            src="/logo.jpeg"
            alt="Propas Logo"
            width={40}
            height={40}
            priority
          />
          <div className="ml-4">
            <h1 className="text-lg font-semibold whitespace-nowrap text-black">
              PROPAS INDONESIA
            </h1>
            <p></p>
          </div>
        </div>
        <button
          onClick={toggleMenu} // Added onClick event to toggle the menu
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen} // Set the aria-expanded attribute based on menu state
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-white bg-red-700 rounded md:bg-transparent md:text-red-700 md:p-0"
                aria-current="page"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/#news"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
              >
                Berita{" "}
              </Link>
            </li>

            <li>
              {profile.name !== "" ? (
                <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0">
                  Hi, {profile.name.split(" ")[0]}
                </div>
              ) : (
                <Link
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0"
                >
                  Log in{" "}
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
