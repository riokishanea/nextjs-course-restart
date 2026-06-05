"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button type="button" className="cursor-pointer">
          <Image src="/icons/hamburger.svg" height={23} width={23} alt="menu" className="invert-colors sm:hidden" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="background-light900_dark200 border-none px-5 py-5" aria-describedby={undefined}>
        <SheetTitle className="hidden">Navigation</SheetTitle>

        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" height={23} width={23} alt="logo" />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev<span className="text-primary-500">Flow</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose asChild>
            <section className="flex h-full flex-col gap-6 pt-16">
              <NavLinks isMobileNav/>
            </section>
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-10.5 w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span> 
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium min-h-10.5 btn-tertiary light-border-2 text-dark400_light900  w-full rounded-lg px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
