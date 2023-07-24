import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import firebase from "../../lib/firebase";

const links = [
  { title: "Overview", link: "/" },
  { title: "Books", link: "/books" },
  { title: "Categories", link: "/categories" },
  { title: "Authors", link: "/authors" },
  { title: "Blacklist", link: "/blacklist" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col w-full">
        {links.map((link) => {
          return (
            <a
              className={
                "px-4 py-3 border-b border-neutral-800 text-neutral-400 hover:text-white " +
                (location.pathname == link.link ? "text-white" : "")
              }
              href={link.link}
            >
              {link.title}
            </a>
          );
        })}
      </div>
      <label
        className={
          "px-4 py-3 border-b border-t border-neutral-800 text-neutral-400 hover:text-white"
        }
        onClick={() => firebase.auth().signOut()}
      >
        Sign out
      </label>
    </div>
  );
}
