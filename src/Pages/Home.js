import Products from "../Components/Products";

const Home = () => {
    const em = {
        marginLeft: '140px'
    }
    const ems = {
        marginLeft: '60px'
    }
    const emi = {
         marginLeft: '140px'
    }
    const piz = {
        marginLeft: '180px'
    }
    return (
     <>    
     <div className="hero py-16">
        <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2">
                <h6 className="text-lg"><em style={em}>Are You Hungry ?</em></h6>
                <h1 className="text-3xl md:text-6xl font-bold" style={ems}>Don't Wait !</h1>
                <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 
                hover:bg-yellow-600" style={emi}>Order Now</button>
            </div>
            <div className="w-1/2">
                <img src="/Images/pizza.png" alt="Pizza" style={piz} />
            </div>
        </div>
     </div>
     <div className="pb-24">
        <Products />
     </div>
     </> 
    )
}

export default Home;