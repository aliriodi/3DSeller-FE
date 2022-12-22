import React , { useEffect /*, useState*/} from 'react';
import {useDispatch} from 'react-redux';
import {getProducts} from '../redux/DSellerActions';

function Home() {
    //Esta linea es para poder traer mis datos desde el db.json
    //const [data,setData]=useState([]);
    //
     const dispatch = useDispatch();
     //useEffect (()=>{getProducts()},[])
     useEffect (()=>{dispatch(getProducts())})
  return (
    <div>Home</div>
  )
}

export default Home
