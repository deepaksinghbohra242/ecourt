import React from "react";
import { CgProfile } from "react-icons/cg";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-gray-100  p-4 px-6 dark:bg-gray-800">
      <div className="flex justify-end items-center gap-3">
        <CgProfile className="w-6 h-6 text-gray-700 dark:text-white cursor-pointer" />
        <span className="text-sm text-gray-800 dark:text-gray-300">
          deepaksingbohra242@gmail.com
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
