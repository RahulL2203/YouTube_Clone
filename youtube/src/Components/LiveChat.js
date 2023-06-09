import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import ChatMessage from './ChatMessage';
import {generateRandomName,makeRandomMessage} from "../utils/helper"

const LiveChat = () => {
   const [liveMessage,setLiveMessage] = useState("");
   const dispatch = useDispatch();

   const chatMessages =useSelector((store)=>store.chat.messages)

   useEffect(()=> {
     const i = setInterval(() => {
          
         dispatch(
            addMessage({
               name:generateRandomName(),
               message: makeRandomMessage(20),
            })
         )
      }, 2000);
  
      return ()=>clearInterval(i);

   },[])
  return (
   <>
    <div className="w-full h-[400px] ml-2 p-2 bg-slate-100 rounded-lg border border-black overflow-y-scroll flex flex-col-reverse">
      {
      chatMessages.map((c,i)=>(<ChatMessage key ={i}
      name={c.name} 
      message={c.message}/>))}

      
      </div>
      <form className="w-full p-2 ml-2 border border-black"
      onSubmit={(e) => {
         e.preventDefault();
        
         dispatch(addMessage({
            name:"Rahul_Lakkavarapu",
            message: liveMessage,
         }));

         setLiveMessage("");


      }} 
      >
         <input className="w-4/5 px-2" 
            type="text" 
            value = {liveMessage}
            onChange={(e)=>{
            setLiveMessage(e.target.value);
            }}/>
         <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
      </>
  );
}

export default LiveChat;