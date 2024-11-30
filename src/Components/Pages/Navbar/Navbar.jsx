import NavButton from './NavButton/NavButton';
import { FiShoppingCart, FiHome, FiUser, FiX } from 'react-icons/fi';
import SearchBar from './SearchBar/SearchBar';
import { CiChat1 } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import UserProfile from './UserProfile/UserProfile';

const Navbar = () => {





    return (
        <div className=" w-full bg-white dark:bg-mainDarkBg shadow-md z-50">
            <div className="flex items-center justify-between  mx-auto py-4 rounded-full">

                {/* Search Bar */}
                <SearchBar></SearchBar>
                {/* Search Bar */}


                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                    <NavButton title="Cart" color="#FF6B6B" icon={<FiShoppingCart />} />

                    <NavButton title="Chat" dotColor={'#4A90d9'} color="#4A90E2" icon={<CiChat1 />} />

                    <NavButton title="Notifications" dotColor={"#FF6B9C"} color="#FAA381" icon={<IoMdNotificationsOutline />} />


                    {/* user profile */}
                    <UserProfile />
                    {/* user profile */}

                </div>
                {/* Navigation Buttons */}

            </div>
        </div>
    );
};

export default Navbar;
