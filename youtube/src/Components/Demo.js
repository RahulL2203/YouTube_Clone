import React, { useState ,useMemo } from 'react';
import {findPrime} from "../utils/helper";

const Demo = () => {

   const [text,setText] = useState(0);
   const [isDarkTheme, setIsDarkTheme] = useState(false);
   console.log("Rerndering...")
   //Heavy Operations

   //const prime = findPrime(text );

   const prime = useMemo(() => findPrime(text), [text]);
  return (
    <div className={
      "m-2 p-2 border border-black w-96 h-96" + 
      (isDarkTheme && "text-white bg-green-300 font-bold text-white")
      }>
         <div>
            <button className="bg-blue-200 m-2 p-2" onClick={()=>setIsDarkTheme(!isDarkTheme)}>Toggle</button>
         </div>
      <div>
         <input className="border border-black w-72"
         type ="number" 
         value={text} 
         onChange={(e)=> setText(e.target.value)}/>
      </div>
      <div>
         nth Prime: {prime}
      </div>
      </div>
  )
}

export default Demo;