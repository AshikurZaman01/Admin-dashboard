import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Tooltip from '../Utils/Tooltip/Tooltip';
import Navbar from '../Pages/Navbar/Navbar';
import Sidebar from '../Pages/Sidebar/Sidebar';

const Roots = () => {
    const [activeMenu, setActiveMenu] = useState(true);

    return (
        <div className="flex relative dark:bg-mainDarkBg min-h-screen bg-blue-300">

            {/* Tooltip */}
            <div className="fixed right-4 bottom-4 z-[1000]">
                <Tooltip title="Settings" />
            </div>
            {/* Tooltip */}



            {/* Sidebar */}
            <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            {/* Sidebar */}

            {/* Main Content */}
            <div className={`flex-1  ml-0 md:ml-72 transition-all duration-300 ${activeMenu ? 'md:ml-72' : 'ml-36'}`}>

                {/* Navbar */}
                <Navbar />
                {/* Navbar */}

                {/* Routes Content */}
                <div className="pl-24 md:pl-0 md:mt-0 mt-0 bg-blue-600">
                    <Outlet />
                </div>
                {/* Routes Content */}

            </div>
        </div>
    );
};

export default Roots;
