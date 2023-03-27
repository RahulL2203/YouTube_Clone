import React , {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

   const [searchQuery , setSearchQuery] = useState("");

   const [suggestions,setSuggestions] = useState([]);
   const [showSuggestions, setShowSuggestions] = useState(false);

   const searchCache = useSelector((store) => store.search);
   const dispatch = useDispatch();

   useEffect(()=>{
    
     //Make an API call on every key press but 
      //if the difference between two key press is <200ms decline the API call
      const timer = setTimeout(()=>{
         if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery]);
         }
         else{
            getSearchSuggestions()
         }
         }, 200);
   
      return ()=>{
         clearTimeout(timer);
      };

   },[searchQuery]);

   /**
    * 
    * key -i
    *    -render the component
    *    -useEffect() 
    *    -startTimer=>make api call after 200 ms
    * 
    * suppose before 200ms
    * key -ip
    *    -destroy the component(useEffect return method)
    *    -re-render the component
    *    -useEffect()
    *    -start timer make an API call after 200ms
    * 
    * no key pressed until 200 ms later
    *    -setTimeOut 200ms - make an  API call
    */

   const getSearchSuggestions = async ()=>{
      console.log("API Call - " + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
      const json = await data.json();
     // console.log(json[1]);
     setSuggestions(json[1]);

     //update cache
     dispatch(
      cacheResults({
         [searchQuery]:json[1],
      })
     );
   };



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
         <div>
         <input className="w-1/2 border border-gray-400 p-1 rounded-l-full" 
         type ="text"
         value= {searchQuery}
         onChange={(e)=> setSearchQuery(e.target.value)}
         onFocus={()=>setShowSuggestions(true)}
         onBlur= {()=>setShowSuggestions(false)}
         />   
         <button 
         className="border border-gray-400 px-3 py-1 rounded-r-full bg-gray-100"
         >🔍
         </button> 
         </div>  
         {showSuggestions&&(
         <div className="fixed bg-white py-2 px-2 px-5 w-[22rem] shadow-lg rounded-lg border-gray-100">
            <ul>
              {suggestions.map((s)=>(
                  <li key={s} className="py-1 px-3 shadow-sm hover:bg-gray-100 rounded-lg"> 
                  🔍 {s}
                  </li>
                  ))}
           
            </ul>
         </div>)}
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