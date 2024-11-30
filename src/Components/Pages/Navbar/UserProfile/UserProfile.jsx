import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const UserProfile = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="flex justify-between items-center gap-2 pr-3">
            <div className="w-11 h-11 rounded-full border-2 border-blue-500 ring-1 ring-blue-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-blue-500">
                <img
                    className="rounded-full h-full w-full object-cover"
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User"
                />
            </div>

            <div className="flex justify-center items-center gap-2 cursor-pointer text-gray-400">
                <h3 className="text-sm font-semibold text-white transform transition-all duration-300 hover:scale-105 ">Ashik</h3>

                {/* user profile details */}
                <div className="relative">
                    <span className="cursor-pointer text-blue-600 text-lg" onClick={toggleDropdown}>
                        {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </span>

                    {isDropdownOpen && (
                        <ul className="menu dropdown-content bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl z-[1] w-60 p-4 shadow-lg absolute top-full right-0 mt-6 transform transition-all duration-300 opacity-100">
                            <li className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg">
                                <img
                                    className="rounded-full h-full w-full object-cover"
                                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="User"
                                />
                            </li>
                            <li className="text-center text-white">
                                <h2 className="font-semibold text-xl">Ashik</h2>
                                <p>Age: <span className="font-light">50</span></p>
                                <p>Address: <span className="font-light">Khulna</span></p>
                            </li>

                            <li className="mt-4">
                                <button className="bg-red-500 text-white py-2 px-6 rounded-xl hover:bg-red-400 transition-all duration-200 shadow-md hover:scale-105">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
                {/* user profile details */}

            </div>

        </div>
    );
}

export default UserProfile;
