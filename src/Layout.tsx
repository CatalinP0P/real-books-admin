import React, { useState } from "react";
import logoDark from "./assets/logoDark.png";
import Navigation from "./components/ui/Navigation";
import { ReactComponent as MenuSVG } from "./assets/svgs/menu.svg";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className="min-h-screen flex flex-col w-full flex-1 text-white">
      <div className="flex flex-row items-baseline bg-neutral-900 border-b border-neutral-800 py-4 px-8 justify-start gap-4">
        <MenuSVG
          onClick={() => setMobileNav(!mobileNav)}
          className={
            "h-[32px] w-[32px] lg:hidden transition-all " +
            (mobileNav ? " rotate-90" : " rotate-0")
          }
        />
        <img className="h-[32px]" src={logoDark} />
      </div>
      <div className="flex flex-row h-full flex-1">
        <div
          className={
            "lg:hidden fixed z-[10] transition-all left-0 bottom-0 top-16 w-[30%] max-w-[300px] bg-neutral-900 " +
            (mobileNav
              ? " pointer-events-auto "
              : " translate-x-[-100%] pointer-events-none")
          }
        >
          <Navigation />
        </div>
        <div className="hidden lg:flex flex-col min-w-[200px] bg-neutral-900">
          <Navigation />
        </div>
        <div className="bg-neutral-800 flex-1 relative">
          {children}
          <div
            className={
              "absolute lg:hidden left-0 top-0 bottom-0 right-0 bg-[rgba(0,0,0,.5)] z-[1] " +
              (mobileNav ? "" : " hidden")
            }
            onClick={() => setMobileNav(false)}
          ></div>
        </div>
      </div>
    </div>
  );
}
