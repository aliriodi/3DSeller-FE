import {getAllProducts /*, getProductById*/} from "./DSellerSlice";

export const  getProducts=  () => async (dispatch) => {
    await  fetch('http://127.0.0.1:3000/api/productos')
    .then(response=> response.json() )
    .then(myJson  => dispatch(getAllProducts( myJson )) )
    .catch(error => console.log(error));
   }