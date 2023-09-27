import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../ContextCart";

const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (event, product) => {
    event.preventDefault();

    let _cart = { ...cart };
    if (!_cart.items) {
      _cart.items = {};
    }
    if (_cart.items[product.id]) {
      _cart.items[product.id] += 1;
    } else {
      _cart.items[product.id] = 1;
    }
     
    if (_cart.totalItems) {
      _cart.totalItems = 0;
    }
    _cart.totalItems += 1;
    setCart(_cart);

    // const cart = {
    //   items: {

    //   }
    // }
  };
  return (
    <Link to={`/products/${product.id}`}>
      <div>
        <img src={product.image} style={{ height: "270px" }} alt="Pizza" />
        <div className="text-center">
          <h2 className="text-lg font-bold py-2">{product.title}</h2>
          <span className="bg-gray-200 py-2 rounded-full text-sm px-4">
            {product.category}
          </span>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>{product.price}</span>
          <button
            onClick={(e) => {
              addToCart(e, product);
            }}
            className="bg-yellow-500 py-1 px-4 rounded-full font-bold"
          >
            ADD
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
