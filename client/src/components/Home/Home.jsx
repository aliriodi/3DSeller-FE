import React , { useEffect /*, useState*/} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../redux/DSellerActions';
//import { Link } from 'react-router-dom';
import Vcard from '../Vcard/Vcard'
import logo from './Logo.jpeg'
import './Home.css'


function Home() {
     const dispatch = useDispatch();
     const {products} = useSelector(state=>state.products);
     useEffect (()=>{dispatch(getProducts())
    // eslint-disable-next-line
     },[])
    
  return (

    <div>
    	<div className="container">
  <div className="logo"><img className='imglogo' alt="" src={logo}/></div>
  
  <a href="/home" className="item">Home</a>
  <a href="/about" className="item">About</a>
  <a href="/" className="item">Contact</a>
  <a href="/" className="item">Archive</a>
  <a href="/" className="item">Resource</a>
  <a href="/" className="item">Help</a>
</div>
      
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

export default Home
