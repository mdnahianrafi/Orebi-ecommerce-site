import { Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RootLayouts from "./components/root layout/RootLayouts";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contacts from "./pages/Contacts";
import ProductInside from "./pages/ProductInside";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyAccount from "./pages/MyAccount";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Error from "./pages/Error";



function App() {

  return (
    <>

<Routes>
  <Route element={<RootLayouts/>}>
  <Route path="/" element= {<Home/>}/>
  <Route path="/shop" element= { <Shop/> }/>
  <Route path="/about" element= { <About/> }/>
  <Route path="/contacts" element= { <Contacts/> }/>
  <Route path="/product-description" element= { <ProductInside/> }/>
  <Route path="/login" element= { <Login/> }/>
  <Route path="/signup" element={ <SignUp/> }/>
  <Route path="/my-account" element={ <MyAccount/> }/>
  <Route path="/cart" element={ <Cart/> }/>
  <Route path="/checkout" element={ <Checkout/> }/>
  <Route path="*" element={ <Error/> }/>


  </Route>
</Routes>

    </>
  );
}

export default App;
