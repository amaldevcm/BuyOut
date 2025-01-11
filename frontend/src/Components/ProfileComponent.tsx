// import { useState } from 'react';
// import default_profile from '../assets/profile_default.jpg';
import ListingComponent from "./ListingComponent";

// const [data, setData] = useState("");

export default function ProfileComponent() {
    return(
        <>
        <div className='flex flex-row px-40 py-10 overflow-y-auto' style={{height: '90dvh'}}>
            <div className='w-1/3 h-full p-2 flex flex-col border-2 border-gray-500 bg-gray-500 rounded-md'>
                <div className="flex flex-row p-2">
                    <label htmlFor="name" className="w-1/3">Name</label>
                    <input type="text" name='name' value="Amal" className="w-full px-2 py-1 rounded"/>
                </div>
            </div>
            <div className='w-full p-2 flex flex-col'>
                <ListingComponent></ListingComponent>
            </div>
        </div>
        </>
    );
}