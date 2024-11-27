import { CiSettings } from "react-icons/ci"

const Tooltip = ({ title }) => {
    return (

        <div className='relative group'>
            <div className='absolute bottom-10 right-2 hidden group-hover:block bg-gray-800 text-white text-sm py-2 px-4 rounded-lg shadow-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                {title}
            </div>

            <button className='p-2 rounded-full hover:bg-gray-200'>
                <CiSettings className='w-10 h-10 text-gray-700' />
            </button>
        </div>
    )
}

export default Tooltip