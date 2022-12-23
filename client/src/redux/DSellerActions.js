import {getAllProducts /*, getProductById*/} from "./DSellerSlice";

export const  getProducts=  () => async (dispatch) => {
   const api = await  fetch('http://127.0.0.1:3001/db')
    .then(response=> response.json() )
    .then(myJson  => dispatch(getAllProducts( myJson )) )
    .catch(error => console.log(error));
   }