import React from "react";

const links = [
  { title: "Overview", link: "/" },
  { title: "Books", link: "/books" },
  { title: "Categories", link: "/categories" },
  { title: "Authors", link: "/authors" },
  { title: "Blacklist", link: "/blacklist" },
];

export default function Navigation() {
  return (
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <a
            className="px-4 py-3 border-b border-neutral-800 text-neutral-400 hover:text-white"
            href={link.link}
          >
            {link.title}
          </a>
        );
      })}
    </div>
  );
}
