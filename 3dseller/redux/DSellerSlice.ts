import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DSellerStateProucts {
  products: object,
  detail:object
}

const initialState: DSellerStateProucts = {
  products:[],
  detail:{} 
}
export const DSellerSlice = createSlice ({
         name: "products",
         initialState,
  reducers:{ 
    getAllProducts: (state,action)=>{
        state.products = action.payload
    },
   /* getProductById: (state,action)=>{
        state.detail = action.payload
    }*/
  }
})

export const {getAllProducts /*, getProductById*/} = DSellerSlice.actions;

export default DSellerSlice.reducer 
