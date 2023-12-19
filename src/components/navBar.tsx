import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div className="flex">
      <Link
        href="/"
        className="text-3xl font-drukWideWeb pt-6 px-6 absolute top-0 left-0 h-[75px] opacity-20 z-10"
      >
        Memoria
      </Link>
    </div>
  );
}
