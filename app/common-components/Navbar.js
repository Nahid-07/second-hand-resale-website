"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* desktop navbar */}
      <div className="md:flex justify-between p-6 h-14 shadow-md items-center hidden">
        <header>
          <h1 className="text-2xl font-semibold">Resale.Bd</h1>
        </header>
        <nav>
          <div>
            <ul className="flex space-x-6 text-lg">
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/dashbord">
                <li>Dashboard</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/SignIn">
                <li>Log in</li>
              </Link>
              <Link href="/">
                <li>Log out</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* navbar for mobile device */}

      <div className="p-6 flex md:hidden justify-between h-10 shadow-md items-center">
        <header>Resale.Bd</header>
        {/* tap and show menu icon */}
        <div onClick={() => setOpen(!open)}>
          <RxHamburgerMenu />
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} bg-gray-100 `}>
        <ul className="p-6 space-y-4">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/dashbord">
            <li>Dashboard</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
          <Link href="/SignIn">
            <li>Log in</li>
          </Link>
          <Link href="/">
            <li>Log out</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
