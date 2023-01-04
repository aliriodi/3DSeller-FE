import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/DSellerActions";
import Vcard from "../Vcard/Vcard";

function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line
  }, [dispatch]);

  const productos = () => {
    if (search !== "") {
      const filtrados = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      return filtrados;
    } else return products;
  };

  const [search, setSearch] = useState("");
  const onSearchChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      <div className="container0">
        <div>
          <input
            type="text"
            placeholder="Busca tu producto"
            value={search}
            onChange={onSearchChange}
          />
        </div>
        <div className="flex-container">
          {products &&
            productos().map((product3d) => {
              return (
                <Vcard
                  key={product3d.name}
                  id={product3d.id}
                  name={product3d.name}
                  image={product3d.image}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Products;
