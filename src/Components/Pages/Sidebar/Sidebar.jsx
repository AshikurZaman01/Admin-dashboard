import { Link, useLocation } from 'react-router-dom';
import Header from './Header/Header';
import SmallDeviceSidebar from './SmallDeviceSidebar';
import LargeDeviceSidebar from './LargeDeviceSidebar';
import { UseGlobalState } from '../../ContextApi/ContextProvider';

const Sidebar = () => {

    const { activeMenu, setActiveMenu } = UseGlobalState();


    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "bg-blue-500 text-white" : "";

    return (
        <div className={`w-20 sm:w-20 md:w-72 fixed sidebar rounded dark:bg-secondaryDarkBg bg-white top-0 left-0 h-full 
        ${activeMenu ? "transform transition-all ease-in-out duration-500 shadow-lg hover:shadow-xl" : "w-0 sm:w-0"}`}
            style={{ perspective: '1000px' }}>

            <Header />

            {activeMenu && (
                <div className="flex flex-col h-full">

                    {/* On small screens, show only icons */}
                    <SmallDeviceSidebar isActive={isActive}></SmallDeviceSidebar>
                    {/* On small screens, show only icons */}

                    {/* On larger screens, show full text and icons */}
                    <LargeDeviceSidebar isActive={isActive}></LargeDeviceSidebar>
                    {/* On larger screens, show full text and icons */}

                </div>
            )}
        </div>
    );
}

export default Sidebar;
