import NavButton from "../NavButton/NavButton";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
    const [showSearch, setShowSearch] = useState(false);

    const handleShowSearchBar = () => {
        setShowSearch(!showSearch);
        console.log("lol");
    };

    return (
        <div className="w-full flex">
            {/* Mobile search button */}
            <div className="block md:hidden pl-24">
                <NavButton
                    title="Search"
                    customFunc={handleShowSearchBar}
                    icon={<IoIosSearch />}
                    color="#FF6B6B"
                />
            </div>

            {/* Desktop search bar */}
            <div className="relative w-1/2 px-5 hidden md:block">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-mainDarkBg dark:text-white dark:border-gray-700"
                />
            </div>

            {/* Mobile search bar */}
            <div
                className={`${showSearch ? "block" : "hidden"
                    } md:hidden w-full px-5 relative`}
            >
                <input
                    type="text"
                    placeholder="Search..."
                    className="absolute mt-16 -left-10 w-[200px]  px-4 py-2 border border-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-mainDarkBg dark:text-white dark:border-gray-700"
                />
            </div>
        </div>
    );
};

export default SearchBar;
