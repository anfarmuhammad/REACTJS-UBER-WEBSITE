import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-20 bg-gray-950 flex items-center border-b-2 px-4 md:px-8">
      <h1 className="text-2xl md:text-4xl font-mono text-white flex-1">Uber</h1>

      <ul className="hidden md:flex gap-8 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contacts">Drive</Link></li>
        <li><Link to="/products">Business</Link></li>
        <li><Link to="/prices">About</Link></li>
      </ul>

      <div className="hidden md:flex gap-4">
        <button className="w-[120px] md:w-[150px] h-[40px] md:h-[45px] bg-gray-950 text-white">
          <Link to="/login">Login</Link>
        </button>
        <button className="w-[120px] md:w-[150px] h-[40px] md:h-[45px] bg-white rounded-lg text-gray-950">
          Sign up
        </button>
      </div>

      <button
        className="block md:hidden text-white text-xl"
        onClick={toggleMenu}
      >
        ☰
      </button>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col w-full bg-gray-950 text-white mt-4">
          <ul className="flex flex-col gap-4 px-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Drive</Link></li>
            <li><Link to="/products">Business</Link></li>
            <li><Link to="/prices">About</Link></li>
          </ul>
          <div className="flex flex-col gap-2 mt-4 px-4">
            <button className="w-full h-[40px] bg-gray-950 text-white">
              <Link to="/login">Login</Link>
            </button>
            <button className="w-full h-[40px] bg-white rounded-lg text-gray-950">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
