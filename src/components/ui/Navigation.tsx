import React, { useEffect } from "react";
import firebase from "../../lib/firebase";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const links = [
  { title: "Overview", link: "/" },
  { title: "Books", link: "/books" },
  { title: "Categories", link: "/categories" },
  { title: "Authors", link: "/authors" },
  { title: "Blacklist", link: "/blacklist" },
];

export default function Navigation({ closePopup }: { closePopup?: any }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="flex flex-col w-full">
        {links.map((link) => {
          return (
            <a
              className={
                "px-4 py-3 cursor-pointer border-b border-neutral-800 text-neutral-400 hover:text-white " +
                (location.pathname == link.link ? "text-white" : "")
              }
              onClick={() => {
                navigate(link.link as string);
                if (closePopup) closePopup();
              }}
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
