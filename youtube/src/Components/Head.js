import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
   const dispatch = useDispatch();

   const toggleMenuHandler = () =>{

      dispatch(toggleMenu());

   };
  return (
    <div className="grid grid-flow-col m-2 p-2 shadow-lg">
      <div className="flex col-span-1">
         <img 
            onClick={() => toggleMenuHandler()}
         className= "h-7 mt-2 cursor-pointer"
         alt="menu" 
         src="https://icons-for-free.com/download-icon-hamburger-1324760528048814325_512.png"/>
         <a href="/">
         <img 
         className= "h-11 mx-2"
         alt ="youtube-icon" 
         src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"/>
         </a>
      </div>
      <div className="col-span-10 mx-28">
         <input className="w-1/2 border border-gray-400 p-1 rounded-l-full" type="text"/>   
         <button className="border border-gray-400 px-3 py-1 rounded-r-full bg-gray-100">🔍</button>   
      </div>
      <div  className="flex col-span-1">
         <img 
         className= "h-8"
         alt="user" 
         src="https://cdn-icons-png.flaticon.com/512/149/149071.png"/>

      </div>
    </div>
  )
}

export default Head;