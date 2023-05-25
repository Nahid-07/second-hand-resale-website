"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const animationClass = "transition ease-in-out hover:scale-110 duration-150"
  return (
    <>
      {/* desktop navbar */}
      <div className="md:flex justify-between p-6 h-14 shadow-md items-center hidden bg-black sticky top-0 z-50">
        <header>
          <h1 className="text-2xl font-semibold text-white">Resale.Bd</h1>
        </header>
        <nav>
          <div>
            <ul className="flex space-x-6 text-lg text-white">
              <Link href="/">
                <li className={`${animationClass}`}>Home</li>
              </Link>
              <Link href="/dashbord">
                <li className={`${animationClass}`}>Dashboard</li>
              </Link>
              <Link href="/blog">
                <li className={`${animationClass}`}>Blog</li>
              </Link>
              <Link href="/SignIn">
                <li className={`${animationClass}`}>Log in</li>
              </Link>
              <Link href="/">
                <li className={`${animationClass}`}>Log out</li>
              </Link>
            </ul>
          </div>
        </nav>
      </div>

      {/* navbar for mobile device */}

      <div className="p-6 flex md:hidden justify-between h-10 shadow-md items-center">
        <header className="text-white">Resale.Bd</header>
        {/* tap and show menu icon */}
        <div onClick={() => setOpen(!open)}>
          <RxHamburgerMenu />
        </div>
      </div>

      <nav className={`${open ? "block" : "hidden"} bg-gray-100 `}>
        <ul className="p-6 space-y-4 text-white">
          <Link href="/">
            <li className={`${animationClass}`}>Home</li>
          </Link>
          <Link href="/dashbord">
            <li className={`${animationClass}`}>Dashboard</li>
          </Link>
          <Link href="/blog">
            <li className={`${animationClass}`}>Blog</li>
          </Link>
          <Link href="/SignIn">
            <li className={`${animationClass}`}>Log in</li>
          </Link>
          <Link href="/">
            <li className={`${animationClass}`}>Log out</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
