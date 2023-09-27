import { Link } from "react-router-dom";

const Navigation = () => {
  const cartStyle = {
    background: "#f59E0D",
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  }
  
  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4">
            <Link to="/">
              <img style={{ height: 50, marginLeft: "50px" }} src="/images/logo.png" alt="logo" />
            </Link>
            <ul className="flex items-center" style={{marginRight: "50px"}}>
              <li className="hover:text-orange-500"><Link to="/">Home</Link></li>
              <li className="ml-6 hover:text-orange-500"><Link to="/products">Products</Link></li>
              <li className="ml-6">
                <Link to="/cart">
                  <div style={cartStyle}>
                    <span>10</span>
                    <img className="ml-2" src="/Images/cart.png" alt="cart" />
                  </div>
                </Link>
              </li>
            </ul> 
        </nav>
    </>
  )
}

export default Navigation;