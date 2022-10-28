import React from "react";
import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import RegisterForm from './Components/RegisterForm';
import Login from './Components/LoginForm';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateProduct';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import PrivateRoutes from "./Routes/PrivateRoutes";

function App() {
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <hr></hr>
        <Routes>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/signin" element ={<RegisterForm/>}/>
          <Route path="/products" element={<ProductList/>} />
          <Route path="/add" element={
          <PrivateRoutes>
          <AddProduct />
          </PrivateRoutes>
        } 
          />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
        
        <footer >
          <hr></hr>
          <p className="p"> Contact Us on : <br></br>
            E-mail : goodgirl.contact1@gmail.com <br></br>
            Tél : +21650170632 <br></br>
            Whats : +21650170632, <br></br>
            Facebook : GoodGirl <br></br>
          </p>
        </footer>
      </Router>
      
    </div>
  );
}

export default App;
