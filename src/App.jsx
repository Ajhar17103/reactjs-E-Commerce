import React, { useEffect, useState } from 'react'
import Cart from './Component/Cart/Index';
import NavBar from './Component/Navbar/Index'
import Products from './Component/Products/Index'
import { commerce } from './lib/Commerce'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckoutForm from './Component/CheckoutForm/Index';


function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const {cart} = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleUpdateCartQty=async(productId, quantity)=>{
    const {cart}= await commerce.cart.update(productId,{quantity});
    setCart(cart)
  }
  const hanldeRemoveFromCart=async (productId)=>{
    const {cart}=await commerce.cart.remove(productId)
    setCart(cart)
  }
  const hanldeEmptyCart=async()=>{
    const {cart}=await commerce.cart.empty();
    setCart(cart)
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  

  return (
    <Router>
      <div  >
        <NavBar totalItems={cart.total_items} />
        <Switch>

          <Route exact path='/'>
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>

          <Route exact path='/cart'>
            <Cart cart={cart} 
              handleUpdateCartQty={handleUpdateCartQty}
              hanldeRemoveFromCart={hanldeRemoveFromCart}
              hanldeEmptyCart={hanldeEmptyCart}


            />
          </Route>
          <Route exact path='/checkout'>
            <CheckoutForm/>
          </Route>

        </Switch>




      </div>
    </Router>


  );
};
export default App
