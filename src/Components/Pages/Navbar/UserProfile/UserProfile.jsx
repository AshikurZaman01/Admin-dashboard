const UserProfile = () => {
    return (
        <div className="flex justify-between items-center gap-2 pr-3">
            <div className="w-11 h-11 rounded-full border-2 border-blue-500 ring-1 ring-blue-300 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:ring-blue-500">
                <img 
                    className="rounded-full h-full w-full object-cover"
                    src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                    alt="User"
                />
            </div>
            <div>
                <h3 className="text-sm font-semibold text-gray-900 transform transition-all duration-300 hover:scale-105">Ashik</h3>
            </div>
        </div>
    )
}

export default UserProfile;
