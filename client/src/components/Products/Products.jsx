import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/DSellerActions';
import Vcard from '../Vcard/Vcard'
import Nav from '../Nav/Nav'
function Products() {
    const dispatch = useDispatch();
    const {products} = useSelector(state=>state.products);
    useEffect (()=>{dispatch(getProducts())
   // eslint-disable-next-line
    },[])
  return (
    <div>
        <Nav/>
        <div className="flex-container">
      {products.products &&  products.products.map(product3d=>{
                return ( <Vcard 
                    key={product3d.name}
                    id={product3d.id}
                    name={product3d.name}
                    image={product3d.image}
                     />           
        ); }) }
      </div>
    </div>
  )
}

export default Products
