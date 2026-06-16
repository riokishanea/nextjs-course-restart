"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

interface Props {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherclasses?: string;
}

const LocalSearch = ({ route, imgSrc, placeholder, otherclasses }: Props) => {
  
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  
  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow items-center gap-5 rounded-[10px] px-4 ${otherclasses}`}
    >
      <Image 
        src={imgSrc}
        height={24} 
        width={24} 
        alt="Search" 
        className="cursor-pointer"
      />

      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="paragraph-regular no-focus placeholder text-dark400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
