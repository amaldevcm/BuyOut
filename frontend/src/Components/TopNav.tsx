import { useState } from "react";


export default function TopNav() {
    const [profileMenuOpen, setOpenMenu] = useState(false);

    return(
        <>
        <div className="w-full h-14 border-b-2 border-gray-200 flex flex-row justify-evenly px-3 py-2 align-middle">
            <a href="/" className="w-full text-2xl font-bold text-start">BuyOut</a>
            <div className="w-full h-full flex flex-row align-middle border border-gray-200 rounded-md p-2">
                <i className="bi bi-search"></i>
                <input type="text" className="ms-2 border-none w-full outline-none bg-transparent"/>
            </div>
            <div className="w-full h-full flex flex-row justify-end">
                <button className="text-xl mx-1 p-2"><i className="bi bi-cart"></i></button>
                <button className="text-xl mx-1 p-2"><i className="bi bi-bell"></i></button>
                <button className="text-xl mx-1 p-2" onClick={() => setOpenMenu(!profileMenuOpen)}><i className="bi bi-person-fill"></i></button>
            </div>
        </div>

        { profileMenuOpen && 
            <div className="absolute right-3 w-fit flex flex-col bg-white p-2 text-black rounded border border-gray-400 shadow">
                <a href="/signin" className="p-2 border-b-2 border-gray-200"><i className="bi bi-box-arrow-in-left mr-2"></i> Login/SignUp</a>
                <a href="/profile" className="p-2 border-b-2 border-gray-200"><i className="bi bi-person mr-2"></i> My Profile</a>
                <a href="/listings" className="p-2 border-b-2 border-gray-200"><i className="bi bi-list-ul mr-2"></i> My Listings</a>
                <a href="/messages" className="p-2 border-b-2 border-gray-200"><i className="bi bi-chat-left mr-2"></i> My Messages</a>
                <a href="/" className="p-2 border-b-2 border-gray-200 text-red-500"><i className="bi bi-box-arrow-right mr-2"></i> Logout</a>       
            </div>
        }
        </>
    )
}