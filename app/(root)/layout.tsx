import Navbar from "@/components/navigation/navbar";
import LeftSideBar from "@/components/navigation/LeftSideBar";
import React, { ReactNode } from "react";
import RighSideBar from "@/components/navigation/RighSideBar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar/>
      <div className="flex">
        <LeftSideBar/>
        <section className="flex min-h-screen flex-1 flex-col pb-6 pt-36 max-md:pb-14 sm:px-14 px-5">  {/*sm:px-14 original classname instead of px-1*/}
          <div className="mx-auto w-full max-w-7xl">{children}</div>
        </section>
        <RighSideBar/>
      </div>
    </main>
  );
};

export default RootLayout;
