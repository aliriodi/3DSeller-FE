import { createSlice} from "@reduxjs/toolkit";

export const DSellerSlice = createSlice ({
         name: "products",
         initialState:{
            products:[],
            detail:{}             
         },
  reducers:{
    getAllProducts: (state,action)=>{
        state.products = action.payload
    },
   /* getProductById: (state,action)=>{
        state.detail = action.payload
    }*/
  }
})

export const {getAllProducts , getProductById} = DSellerSlice.actions;

export default DSellerSlice.reducer 
