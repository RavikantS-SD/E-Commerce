import Product from "./Product";
import { useState, useEffect,useContext } from "react";
import axios from "axios";
import { CartContext } from "../ContextCart";

const Products = () => {
  // const {name} = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const API_URL = "https://fakestoreapi.com/products";

  useEffect(() => {
    axios.get(API_URL).then(
      (response) => {
        console.log("Response", response.data);
        setProducts(response.data);
      }
      //response.json()
    );
  }, []);

  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8" style={{ marginLeft: "70px" }}>
        Products 
      </h1>
      <div className="grid grid-cols-5 my-8 gap-24">
        {
        products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Products;
