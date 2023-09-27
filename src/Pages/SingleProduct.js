import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((response) => {
        console.log("Response", response.data);
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }, [params.id]);

  const btn = {
    marginLeft: "7rem",
  };

  return (
    <div className="container mx-auto mt-12">
      <button className="mb-20 font-bold ml-20" style={btn}
        onClick={ () => { navigate(-1); } }>
        Back 
      </button>
      <div className="flex ml-40">
        <img src={product.image} alt="pizza" height={"200px"} width={"200px"} />
        <div className="ml-16">
          <h1 className="text-xl font-bold">{product.title}</h1>
          <div className="text-md">{product.category}</div>
          <div className="font-bold mt-2">{product.price}</div>
          <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
