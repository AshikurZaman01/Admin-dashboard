import NavButton from './NavButton/NavButton';
import { FiShoppingCart, FiHome, FiUser, FiX } from 'react-icons/fi';
import SearchBar from './SearchBar/SearchBar';

const Navbar = () => {





    return (
        <div className=" w-full bg-white dark:bg-mainDarkBg shadow-md z-50">
            <div className="flex items-center justify-between  mx-auto py-4">

                {/* Search Bar */}
                <SearchBar></SearchBar>

                {/* Navigation Buttons */}
                <div className="flex space-x-4">
                    <NavButton title="Home" icon={<FiHome />} color="#2D3748" />
                    <NavButton title="Profile" icon={<FiUser />} color="#4A90E2" />
                    <NavButton title="Cart" color="#FF6B6B" icon={<FiShoppingCart />} />
                </div>
                {/* Navigation Buttons */}

            </div>
        </div>
    );
};

export default Navbar;
