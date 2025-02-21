"use client";

import React, { useEffect, useState } from "react";
import Brand from "./brand";
import Link from "next/link";
import PryBtn from "./pryBtn";
import { cn } from "@/utils/cn";
import { ContainImage } from "./myImage";
import { X } from "lucide-react";

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);

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

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full px-[19.375rem] max-3xl:px-10 max-sm:px-5 py-[1.625rem] bg-[#131B2F] max-md:bg-transparent z-10 transition-all duration-200",
        scrolled && "max-md:bg-[#131B2F]"
      )}
    >
      <nav className="relative flex justify-between items-center max-3xl:justify-center max-3xl:gap-10 max-xl:justify-between">
        <Brand />

        {/* Nav Items */}
        <ul className="flex gap-10 max-3xl:gap-6 max-xl:hidden items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={cn(
                  "text-center text-[#e3e7f3]/50 hover:text-[#e3e7f3]/70 transition-all duration-200 text-base max-3xl:text-sm font-semibold max-3xl:font-medium leading-normal",
                  item.important && "text-[#E3E8F3]"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Nav Button */}
        <div className="max-xl:hidden">
          <PryBtn text="Launch App" />
        </div>

        <div
          onClick={toggleSidebar}
          className="hidden max-xl:block relative aspect-square w-[2rem]"
        >
          <ContainImage src="/svgs/menu.svg" alt="Menu" />
        </div>

        {/* Menu Sidebar */}
        <div
          onClick={toggleSidebar}
          className={cn(
            "fixed top-0 left-0 bottom-0 w-full bg-background backdrop-blur-[20px] transition-all duration-200 translate-x-[-100%] flex flex-col gap-10 z-50 px-8 py-5",
            openSidebar && "translate-x-0"
          )}
        >
          <div className="flex items-center justify-between gap-10">
            <Brand />

            <X className="text-[#14ffff]" />
          </div>

          {/* Nav Items */}
          <ul className="flex flex-col gap-10 max-3xl:gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-center text-[#e3e7f3]/50 hover:text-[#e3e7f3]/70 transition-all duration-200 text-base max-3xl:text-sm font-semibold max-3xl:font-medium leading-normal",
                    item.important && "text-[#E3E8F3]"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <PryBtn text="Launch App" fullWidth />
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
