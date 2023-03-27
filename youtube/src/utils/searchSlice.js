import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
   name:"search",
   initialState:{

   },
   reducers:{
      cacheResults:(state,action) => {
         state = Object.assign(state,action.payload);

      },
   },
});

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;



/**
 * time complexity to search in an Array -O(n)
 * time complexity to search in an Object/map/hashmap -O(1)
 * 
 * 
 * new map(); new one which is more optimised
 */