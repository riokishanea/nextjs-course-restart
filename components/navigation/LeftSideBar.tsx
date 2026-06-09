"use client";
import Link from "next/link";
import NavLinks from "./navbar/NavLinks";
import { Button } from "../ui/button";
import ROUTES from "@/constants/routes";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="background-light900_dark200 light-border shadow-light-300 sticky top-0 left-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-66.5 dark:shadow-none">
      <div className="flex flex-1 flex-col gap-6">
        <NavLinks />
      </div>
      <div className="flex flex-col gap-3">
        <Button asChild className="small-medium btn-secondary min-h-10.5 w-full rounded-lg px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGN_IN}>
            <Image src="/icons/account.svg" height={20} width={20} alt="Account" className="invert-colors lg:hidden" />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button asChild className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-10.5 w-full rounded-lg px-4 py-3 shadow-none">
          <Link href={ROUTES.SIGN_UP}>
            <Image src="/icons/sign-up.svg" height={20} width={20} alt="Sign-Up" className="invert-colors lg:hidden" />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSideBar;
