import { FaHome, FaInfoCircle } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import Header from './Header/Header';

const Sidebar = ({ activeMenu }) => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? "bg-blue-500 text-white" : "";

    return (
        <div className={activeMenu ? "w-20 sm:w-20 md:w-72 fixed sidebar dark:bg-secondaryDarkBg bg-white top-0 left-0 h-full" : "w-0 sm:w-0"}>

            <Header />

            {activeMenu && (
                <div className="flex flex-col h-full">

                    {/* On small screens, show only icons */}
                    <div className="block sm:hidden p-4 overflow-y-auto flex-grow scrollbar-hidden">
                        <Link to="/" className={`block p-4 ${isActive("/")}`}>
                            <FaHome size={24} />
                        </Link>

                        <Link to="/about" className={`block p-4 ${isActive("/about")}`}>
                            <FaInfoCircle size={24} />
                        </Link>
                    </div>
                    {/* On small screens, show only icons */}

                    {/* On larger screens, show full text */}
                    <div className="hidden sm:block overflow-y-auto flex-grow scrollbar-hidden">
                        <p>Dashboard</p>
                        <Link to="/" className={`block p-4 ${isActive("/")}`}>Ecommerce</Link>

                        <p>Pages</p>
                        <Link to="/orders" className={`block p-4 ${isActive("/orders")}`}>Orders</Link>
                        <Link to="/employees" className={`block p-4 ${isActive("/employees")}`}>Employees</Link>
                        <Link to="/customers" className={`block p-4 ${isActive("/customers")}`}>Customers</Link>

                        <p>Apps</p>
                        <Link to="/calender" className={`block p-4 ${isActive("/calender")}`}>Calendar</Link>
                        <Link to="/kanban" className={`block p-4 ${isActive("/kanban")}`}>Kanban</Link>
                        <Link to="/editor" className={`block p-4 ${isActive("/editor")}`}>Editor</Link>
                        <Link to="/colorPicker" className={`block p-4 ${isActive("/colorPicker")}`}>Color Picker</Link>

                        <p>Chart</p>
                        <Link to="/line" className={`block p-4 ${isActive("/line")}`}>Line</Link>
                        <Link to="/area" className={`block p-4 ${isActive("/area")}`}>Area</Link>
                        <Link to="/pie" className={`block p-4 ${isActive("/pie")}`}>Pie</Link>
                        <Link to="/financial" className={`block p-4 ${isActive("/financial")}`}>Financial</Link>
                        <Link to="/colorMapping" className={`block p-4 ${isActive("/colorMapping")}`}>ColorMapping</Link>
                        <Link to="/pyramid" className={`block p-4 ${isActive("/pyramid")}`}>Pyramid</Link>

                        <p className='mb-20'></p>
                    </div>
                    {/* On larger screens, show full text */}
                </div>
            )}

        </div>
    )
}

export default Sidebar;
