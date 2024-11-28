const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-[18px] bg-blue-600 text-white rounded shadow-md ">
            <h1
                className="hidden md:block text-lg font-bold transform transition-transform duration-300 ease-in-out 
                hover:scale-105 "
            >
                ChocoCart
            </h1>

            <h1 className="text-xs font-bold md:hidden">Choco</h1>
        </div>
    );
};

export default Header;
