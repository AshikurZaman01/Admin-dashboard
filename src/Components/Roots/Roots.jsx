import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Tooltip from '../Utils/Tooltip/Tooltip';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle } from 'react-icons/fa'; // Import icons

const Roots = () => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <div className="flex relative dark:bg-mainDarkBg min-h-screen bg-blue-300">

            {/* Tooltip */}
            <div className="fixed right-4 bottom-4 z-[1000]">
                <Tooltip title="Settings" />
            </div>

            {/* Sidebar */}
            <div className={activeMenu ? " w-20 sm:w-20 md:w-72 fixed sidebar dark:bg-secondaryDarkBg bg-white top-0 left-0 h-full" : "w-0 sm:w-0"}>
                {activeMenu && (
                    <div>

                        {/* On small screens, show only icons */}
                        <div className="block sm:hidden p-4">
                            <Link to="/" className="block p-4">
                                <FaHome size={24} />
                            </Link>
                            <Link to="/about" className="block p-4">
                                <FaInfoCircle size={24} />
                            </Link>
                        </div>

                        {/* On larger screens, show full text */}
                        <div className="hidden sm:block">
                            <Link to="/" className="block p-4">Home</Link>
                            <Link to="/about" className="block p-4">About</Link>
                        </div>
                    </div>
                )}
            </div>


            {/* Main Content */}
            <div className={`flex-1  ml-0 md:ml-72 transition-all duration-300 ${activeMenu ? 'md:ml-72' : 'ml-36'}`}>

                {/* Navbar */}
                <div className='fixed md:static pl-24 md:pl-0 bg-mainBg dark:bg-mainDarkBg navbar w-full '>
                    Navbar
                </div>

                {/* Routes Content */}
                <div className="pl-24 md:pl-0 md:mt-0 mt-16 bg-blue-600">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Roots;
