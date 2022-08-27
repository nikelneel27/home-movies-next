import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import { BellIcon } from "@heroicons/react/outline";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"} ${!isScrolled && ""}`}>
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <p className="flex leading-3 m-3">
          <span className="text-[1.5rem] text-[#ffff] font-semibold">Home</span>
          <span className="text-[1.5rem] font-semibold text-red-600 ml-2">
            Movies
          </span>
        </p>

        <ul className="hidden space-x-4 md:flex">
          <li className="nav-links">Home</li>
          <li className="nav-links">Movies</li>
          <li className="nav-links">TV Shows</li>
          <li className="nav-links">New & Popular</li>
          <li className="nav-links">My Favourites</li>
        </ul>
      </div>
      <div className="flex items-center space-x-2 lg:space-x-10">
        <SearchIcon className="hidden sm:inline h-6 w-6 text-white-500" />
        <p className="nav-links hidden lg:inline">Kids</p>
        <BellIcon className="hidden sm:inline h-6 w-6 text-white-500" />
        <Link href="/LoginPage">
          <UserIcon className="h-6 w-6 text-white-500" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
