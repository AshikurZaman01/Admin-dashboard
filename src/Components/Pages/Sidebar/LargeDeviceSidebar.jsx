import { FaChartArea, FaChartLine, FaChartPie, FaHome, FaShoppingBasket, FaUsers } from 'react-icons/fa';
import { FaChartGantt, FaUsersBetweenLines } from "react-icons/fa6";
import { GiBallPyramid } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdViewKanban } from "react-icons/md";
import { CgColorPicker } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import { CiEdit } from 'react-icons/ci';

const LargeDeviceSidebar = ({ isActive }) => {
    return (
        <div className="hidden sm:block overflow-y-auto flex-grow scrollbar-hidden">
            <p className="text-xl font-semibold text-white mt-4">Dashboard</p>
            <div className='divider h-1 p-1 m-1'></div>
            <NavLink to="/" className={`sidebar-item`} activeClassName="active">
                <FaHome size={24} /> Ecommerce
            </NavLink>

            <p className="text-xl font-semibold text-white mt-4">Pages</p>
            <div className='divider h-1 p-1 m-1'></div>
            <NavLink to="/orders" className={`sidebar-item`} activeClassName="active">
                <FaShoppingBasket size={24} /> Orders
            </NavLink>
            <NavLink to="/employees" className={`sidebar-item`} activeClassName="active">
                <FaUsers size={24} /> Employees
            </NavLink>
            <NavLink to="/customers" className={`sidebar-item`} activeClassName="active">
                <FaUsersBetweenLines size={24} /> Customers
            </NavLink>

            <p className="text-xl font-semibold text-white mt-4">Apps</p>
            <div className='divider h-1 p-1 m-1'></div>
            <NavLink to="/calender" className={`sidebar-item`} activeClassName="active">
                <SlCalender size={24} /> Calendar
            </NavLink>
            <NavLink to="/kanban" className={`sidebar-item`} activeClassName="active">
                <MdViewKanban size={24} /> Kanban
            </NavLink>
            <NavLink to="/editor" className={`sidebar-item`} activeClassName="active">
                <CiEdit size={24} /> Editor
            </NavLink>
            <NavLink to="/colorPicker" className={`sidebar-item`} activeClassName="active">
                <CgColorPicker size={24} /> Color Picker
            </NavLink>

            <p className="text-xl font-semibold text-white mt-4">Chart</p>
            <div className='divider h-1 p-1 m-1'></div>
            <NavLink to="/line" className={`sidebar-item`} activeClassName="active">
                <FaChartLine size={24} /> Line
            </NavLink>
            <NavLink to="/area" className={`sidebar-item`} activeClassName="active">
                <FaChartArea size={24} /> Area
            </NavLink>
            <NavLink to="/pie" className={`sidebar-item`} activeClassName="active">
                <FaChartPie size={24} /> Pie
            </NavLink>
            <NavLink to="/financial" className={`sidebar-item`} activeClassName="active">
                <FaChartGantt size={24} /> Financial
            </NavLink>

            <NavLink to="/colorMapping" className={`sidebar-item`} activeClassName="active">
                <IoMdColorPalette size={24} /> ColorMapping
            </NavLink>

            <NavLink to="/pyramid" className={`sidebar-item`} activeClassName="active">
                <GiBallPyramid size={24} /> Pyramid
            </NavLink>

            <p className='mb-20'></p>
        </div>
    );
}

export default LargeDeviceSidebar;
