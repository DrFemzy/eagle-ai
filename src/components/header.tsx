import React from "react";
import Brand from "./brand";
import Link from "next/link";
import PryBtn from "./pryBtn";
import { cn } from "@/utils/cn";

function Header() {
  const navItems = [
    {
      name: "Products",
      href: "/products",
    },
    {
      name: "Partnerships",
      href: "/partnerships",
    },
    {
      name: "Sponsorships",
      href: "/sponsorships",
    },
    {
      name: "Education",
      href: "/education",
    },
    {
      name: "Docs",
      href: "/docs",
    },
    {
      name: "Team",
      href: "/team",
    },
    {
      name: "Trade Dividends",
      href: "/trade-dividends",
      important: true,
    },
  ];

  return (
    <header className="fixed top-0 w-full px-[19.375rem] py-[1.625rem] bg-[#131B2F]">
      <nav className="flex justify-between items-center">
        <Brand />

        <ul className="flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-center text-[#e3e7f3]/50 hover:text-[#e3e7f3]/70 transition-all duration-200 text-base font-semibold leading-normal",
                  item.important && "text-[#E3E8F3]"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Nav Button */}
        <PryBtn text="Launch App" />

        {/* Nav Items */}
      </nav>
    </header>
  );
}

export default Header;
