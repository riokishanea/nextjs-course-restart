"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/url";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherclasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherclasses }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null); // Used for auto focusing to input element

  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  const previousSearchRef = useRef(searchQuery);

  useEffect(() => {
    if (previousSearchRef.current === searchQuery) return;
    previousSearchRef.current = searchQuery;
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow items-center gap-5 rounded-[10px] px-4 ${otherclasses}`}
      onClick={() => inputRef.current?.focus()} // Auto-Focus
    >
      <Image src={imgSrc} height={24} width={24} alt="Search" className="cursor-pointer"/>

      <Input
        ref={inputRef}
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 w-full border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
