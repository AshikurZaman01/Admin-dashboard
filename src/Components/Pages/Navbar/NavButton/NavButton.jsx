const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
        <div className="tooltip tooltip-bottom" data-tip={title}>
            <button
                className="relative text-xl rounded-full p-3 hover:bg-gray-200 transition duration-300 ease-in-out"
                type="button"
                onClick={customFunc}
                style={{ color }}
            >
                {icon}
                {dotColor && (
                    <span
                        style={{ background: dotColor }}
                        className="absolute inline-flex rounded-full h-2 w-2 right-4 top-1 transform translate-x-1 translate-y-1"
                    />
                )}
            </button>
        </div>
    );
};

export default NavButton;
