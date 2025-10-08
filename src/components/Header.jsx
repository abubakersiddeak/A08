import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoPng from "../assets/logo.png";
import { Github } from "lucide-react";

export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "Apps", path: "/apps" },
    { name: "Installation", path: "/installation" },
  ];

  const location = useLocation(); // current path

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links.map((l) => (
              <li key={l.path}>
                <Link
                  to={l.path}
                  className={
                    location.pathname === l.path
                      ? "text-purple-600 font-bold"
                      : ""
                  }
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-purple-600">
          <img src={logoPng} alt="logo" className="h-8 w-8" />
          <span>HERO.IO</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-4">
        {links.map((l) => (
          <Link
            key={l.path}
            to={l.path}
            className={
              location.pathname === l.path
                ? "text-purple-600 font-bold border-b-2 border-purple-600"
                : "text-gray-700"
            }
          >
            {l.name}
          </Link>
        ))}
      </div>

      <div className="navbar-end">
        <Link
          to="https://github.com/abubakersiddeak"
          className="btn bg-gradient-to-tr to-[#632EE3] from-[#9F62F2] text-white"
        >
          <Github />
          <span>Contribute</span>
        </Link>
      </div>
    </div>
  );
}
