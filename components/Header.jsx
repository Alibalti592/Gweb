"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Mock search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    // Example search results; replace with actual search logic
    const results = [
      { id: 1, title: "ali balti" },
      { id: 2, title: "Result 2" },
      { id: 3, title: "Result 3" },
    ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div className="bg-white border-b border-gray-200 px-6 sticky top-0 left-0 z-10">
      <div className="flex items-center mx-auto h-full max-w-screen-xl">
        <div className="mr-2">
          <button className="btn btn-ghost text-xl mr-3">
            <Link href={"/"}>Gweb</Link>
          </button>
        </div>
        <div className="relative flex-grow opacity-100 md:flex-grow-0">
          <div className="relative max-w-[280px]">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="border-none shadow-none bg-gray-100 rounded-md text-gray-900 w-full px-2 pl-10 leading-7 font-normal text-sm h-8 border-gray-300"
            />
            <div className="absolute top-2.5 left-2 flex items-center justify-center w-10 z-10 pointer-events-none">
              <img src="/images/search-icon.svg" alt="Search Icon" />
            </div>

            {/* Display search results */}
            {searchQuery && searchResults.length > 0 && (
              <div className="absolute mt-2 w-full bg-white border rounded-md shadow-lg z-10">
                <ul className="list-none p-2">
                  {searchResults.map((result) => (
                    <li key={result.id}>
                      <Link
                        href={`/search/${result.id}`}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      >
                        {result.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex items-center pl-4 text-sm space-x-4">
          <button className="relative">
            <img
              src="/images/nav-notifications.svg"
              alt="Notifications"
              className="w-6 h-6"
            />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span>
          </button>

          <button className="relative" onClick={toggleDropdown}>
            <img src="/images/setting.png" alt="Sign Out" className="w-6 h-6" />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Sign Out
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

//  <nav className="ml-auto block md:fixed md:left-0 md:bottom-0 md:bg-white md:w-full">
//    <ul className="flex flex-nowrap list-none justify-between">
//      <li className="flex items-center">
//        <a
//          href="/feed"
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px]"
//          aria-label="Go to Feed"
//        >
//          <img src="/images/nav-home.svg" alt="Home Icon" />
//          <span className="text-gray-600">Home</span>
//        </a>
//      </li>
//      <li className="flex items-center">
//        <a
//          href="/network"
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px]"
//          aria-label="Go to My Network"
//        >
//          <img src="/images/nav-network.svg" alt="Network Icon" />
//          <span className="text-gray-600">My Network</span>
//        </a>
//      </li>
//      <li className="flex items-center">
//        <a
//          href="/jobs"
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px]"
//          aria-label="Go to Jobs"
//        >
//          <img src="/images/nav-jobs.svg" alt="Jobs Icon" />
//          <span className="text-gray-600">Jobs</span>
//        </a>
//      </li>
//      <li className="flex items-center">
//        <a
//          href="/messaging"
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px]"
//          aria-label="Go to Messaging"
//        >
//          <img src="/images/nav-messaging.svg" alt="Messaging Icon" />
//          <span className="text-gray-600">Messaging</span>
//        </a>
//      </li>
//      <li className="flex items-center">
//        <a
//          href="/notifications"
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px]"
//          aria-label="Go to Notifications"
//        >
//          <img src="/images/nav-notifications.svg" alt="Notifications Icon" />
//          <span className="text-gray-600">Notifications</span>
//        </a>
//      </li>
//      <li className="flex items-center border-l border-gray-200">
//        <a
//          className="flex flex-col items-center justify-center text-xs font-normal min-h-[52px] min-w-[80px] relative"
//          onClick={toggleDropdown}
//          aria-label="User menu"
//        >
//          <img
//            src="/images/user.svg"
//            alt="User Icon"
//            className="rounded-full w-6 h-6"
//          />
//          <span className="flex items-center">
//            Me <img src="/images/down-icon.svg" alt="Down Icon" />
//          </span>
//          {dropdownOpen && (
//            <div className="absolute top-11 bg-white rounded-b-md w-24 text-sm text-center border border-gray-300">
//              <a href="/signout" className="block px-2 py-1 hover:bg-gray-100">
//                Sign Out
//              </a>
//            </div>
//          )}
//        </a>
//      </li>
//    </ul>
//  </nav>;
