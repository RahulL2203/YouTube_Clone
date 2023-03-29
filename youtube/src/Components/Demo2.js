import React, { useState , useRef, useEffect } from 'react'

const Demo2 = () => {

   const [Y, setY] = useState(0);
   let x=0;
   const ref = useRef(0);
   
   //not like ref=0;
   //It returns as an Object
   //ref={current: initialValue  }
   const i = useRef(null);
   useEffect(()=>{
      i.current = setInterval(()=>{
         console.log("Namaste React", Math.random());
      },1000);

      return ()=>clearInterval(i.current);
   },[]);

  return (
    <div className="m-2 p-2 border border-black w-96 h-96 bg-slate-100">
         <div>
            <button className="bg-green-100 m-2 p-2" 
            onClick = {()=>{
               x = x + 1;
               console.log("x=" + x);
            }}>Increase x</button>
            <span>let={x}</span>
         </div>

         <div>
            <button className="bg-green-100 m-2 p-2" 
            onClick = {()=>{
               setY(Y + 1);
               console.log("Y= "+ Y);
            }}>Increase Y</button>
            <span>State={Y}</span>
         </div>

         <div>
            <button className="bg-green-100 m-2 p-2" 
            onClick = {()=>{
              ref.current = ref.current+1;
               console.log("Ref="+ ref.current);
            }}>Increase Ref</button>
            <span>Ref={ref.current}</span>
         </div>
         <button className="bg-red-900 m-2 p-2 font-bold text-white rounded-lg"
         onClick={()=>{
            clearInterval(i.current)
         }}>
            Stop Printing</button>
    </div>
  )
}

export default Demo2;