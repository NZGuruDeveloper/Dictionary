"use client";
import Image from "next/image";
import iconSearch from "../assets/images/icon-search.svg";
import Definition from "./get-definition";
import { useEffect, useState, useRef } from "react";

/**
 * A description of the entire function.
 *
 * @return {type} description of return value
 */
export default function Home() {
  const inputRef = useRef(null);
  const [search, setSearch] = useState("");

  function handleSearch() {
    console.log(inputRef.current.value);
    setSearch(inputRef.current.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(() => {
    
  },[search])

  return (
    <div>
      <div className="flex mt-10 mb-10">
        <input type="text" className="w-full h-[40px] rounded p-3" ref={inputRef} onKeyDown={handleKeyDown} />
        <Image src={iconSearch} width={15} height={15} className="m-[-30px]" alt="search" onClick={handleSearch} />
      </div>
      <Definition search={search}/>
    </div>
  );
}
