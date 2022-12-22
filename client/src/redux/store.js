import  { configureStore } from "@reduxjs/toolkit";
import products from "./DSellerSlice"

export default configureStore ({
         reducer:{
           products:products,
         }
})