import { FaChartArea, FaChartLine, FaChartPie, FaHome, FaShoppingBasket, FaUsers } from 'react-icons/fa'
import { FaChartGantt, FaUsersBetweenLines } from "react-icons/fa6";
import { GiBallPyramid } from "react-icons/gi";
import { IoMdColorPalette } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { MdViewKanban } from "react-icons/md";
import { CgColorPicker } from "react-icons/cg";
import { Link } from 'react-router-dom'
import { CiEdit } from 'react-icons/ci';

const SmallDeviceSidebar = ({ isActive }) => {
    return (
        <div className="block sm:hidden overflow-y-auto flex-grow scrollbar-hidden">
            <Link to="/" className={`block p-4 ${isActive("/")}`}>
                <FaHome size={24} />
            </Link>

            <Link to="/orders" className={`block p-4 ${isActive("/orders")}`}>
                <FaShoppingBasket size={24} />
            </Link>

            <Link to="/employees" className={`block p-4 ${isActive("/employees")}`}>
                <FaUsers size={24} />
            </Link>

            <Link to="/customers" className={`block p-4 ${isActive("/customers")}`}>
                <FaUsersBetweenLines size={24} />
            </Link>

            <Link to="/calender" className={`block p-4 ${isActive("/calender")}`}>
                <SlCalender size={24} />
            </Link>

            <Link to="/kanban" className={`block p-4 ${isActive("/kanban")}`}>
                <MdViewKanban size={24} />
            </Link>

            <Link to="/editor" className={`block p-4 ${isActive("/editor")}`}>
                <CiEdit size={24} />
            </Link>

            <Link to="/colorPicker" className={`block p-4 ${isActive("/colorPicker")}`}>
                <CgColorPicker size={24} />
            </Link>

            <Link to="/line" className={`block p-4 ${isActive("/line")}`}>
                <FaChartLine size={24} />
            </Link>

            <Link to="/area" className={`block p-4 ${isActive("/area")}`}>
                <FaChartArea size={24} />
            </Link>

            <Link to="/pie" className={`block p-4 ${isActive("/pie")}`}>
                <FaChartPie size={24} />
            </Link>

            <Link to="/financial" className={`block p-4 ${isActive("/financial")}`}>
                <FaChartGantt size={24} />
            </Link>

            <Link to="/colorMapping" className={`block p-4 ${isActive("/colorMapping")}`}>
                <IoMdColorPalette size={24} />
            </Link>

            <Link to="/pyramid" className={`block p-4 ${isActive("/pyramid")}`}>
                <GiBallPyramid size={24} />
            </Link>

            <p className='mt-20'></p>
        </div>
    )
}

export default SmallDeviceSidebar