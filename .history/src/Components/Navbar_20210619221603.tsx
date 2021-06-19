import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full bg-black text-purple-50">
      <div className="flex items-center justify-center p-4 md:justify-start">
        <StarIcon className="w-10 h-5" />
        <Link to="/" className="text-lg font-semibold uppercase">
          Star Wars Api
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
