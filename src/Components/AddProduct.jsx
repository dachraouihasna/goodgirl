import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../JS/Actions/productActions";
import { logout } from "../JS/Actions/authActions";
import { useNavigate } from "react-router-dom";


function AddProduct() {
    const dispatch = useDispatch ();
    const [product, setProduct] = useState ({
        title: "",
        author: "",
    });
    const handleChange = (event) => {
        setProduct({
            ...product,
            [event.target.name]: event.target.value,
        });
    };
    const navigate=useNavigate();
    return (
        <>
        <button onClick={()=> dispatch(logout(navigate))} > Log Out</button>
        <Form className="add">
        <header className="head">
        <h2> Add Products</h2>
      </header>
            <input 
                className="input"
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
            />
            <input
                className="input"
                type="text"
                placeholder="Author"
                name="author"
                onChange={handleChange}
            />
            <br />
             <Button className="button"
                onClick={() => {
                    dispatch(
                        addProduct({ ...product, id: Math.random() }, dispatch)
                    );
                }}
            >
                Add Product
            </Button>
        </Form>
        </>
    );
}
export default AddProduct;