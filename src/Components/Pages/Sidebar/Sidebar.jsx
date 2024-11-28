import Header from './Header/Header';
import SmallDeviceSidebar from './SmallDeviceSidebar';
import LargeDeviceSidebar from './LargeDeviceSidebar';

const Sidebar = ({ activeMenu }) => {

    const isActive = (path) => location.pathname === path ? "bg-blue-500 text-white" : "";

    return (
        <div className={activeMenu ? "w-20 sm:w-20 md:w-72 fixed sidebar dark:bg-secondaryDarkBg bg-white top-0 left-0 h-full" : "w-0 sm:w-0"}>

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
    )
}

export default Sidebar;

