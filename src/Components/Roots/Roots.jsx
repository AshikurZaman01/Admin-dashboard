import { Outlet } from 'react-router-dom';
import Tooltip from '../Utils/Tooltip/Tooltip';

const Roots = () => {
    return (
        <div className='flex relative dark:bg-mainDarkBg'>
            <div className='fixed right-4 bottom-4 z-[1000]'>

                <Tooltip title='Settings'></Tooltip>


            </div>
            <Outlet />
        </div>
    );
};

export default Roots;
