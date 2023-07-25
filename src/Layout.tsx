import React, { useEffect, useState } from "react";
import Button from "./components/ui/Button";
import logoDark from "./assets/logoDark.png";
import Navigation from "./components/ui/Navigation";
import { ReactComponent as MenuSVG } from "./assets/svgs/menu.svg";
import firebase from "./lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileNav, setMobileNav] = useState(false);
  const [user, loading] = useAuthState(getAuth(firebase.auth().app));

  const signWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredentials = await firebase.auth().signInWithPopup(provider);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;

    console.log(user);
  }, [loading]);

  return loading ? (
    <label>Loading...</label>
  ) : !user ? (
    <div className="bg-neutral-900 h-screen w-screen text-white relative">
      <Button
        onClick={async () => {
          await signWithGoogle();
        }}
        rounded={false}
        className="px-24 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "
      >
        Sign in
      </Button>
    </div>
  ) : (
    <div className="min-h-screen flex flex-col w-full flex-1 text-white">
      <div className="flex flex-row items-center bg-neutral-900 border-b border-neutral-800 py-4 px-8 justify-between gap-4">
        <div className="flex flex-row gap-4 items-center">
          <MenuSVG
            onClick={() => setMobileNav(!mobileNav)}
            className={
              "h-[24px] w-[24px] lg:hidden select-none transition-all " +
              (mobileNav ? " rotate-90" : " rotate-0")
            }
          />
          <img className="h-[32px] select-none" src={logoDark} />
        </div>
        <label className="text-xs">
          Logged in as <b>{user.email}</b>
        </label>
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
          <Navigation closePopup={() => setMobileNav(false)} />
        </div>
        <div className="hidden lg:flex flex-col min-w-[200px] bg-neutral-900">
          <Navigation />
        </div>
        <div className="bg-neutral-800 flex-1 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1400px] gap-2 m-2">
            {children}
          </div>

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
