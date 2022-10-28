import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProducts } from "../JS/Actions/productActions";

export default function UpdateProduct() {
    const { id } = useParams();
    const navigate=useNavigate()
    const dispatch = useDispatch();
   
    const product = useSelector((state) => state.productReducer.product);
    const [productUpdate, setProductUpdate] = useState({
        title: product.title,
        author: product.author,
        id: product.id,
    });
    const handleChange = (event) => {
        setProductUpdate({
            ...productUpdate,
            [event.target.name]: event.target.value,
        });
    };
    useEffect(() =>
    {   
        dispatch(getProductById(id,dispatch));
    return function cleanup() {
        console.log("destroy effect");
      };
    },
    [dispatch, id]);
    return (
        <div>
            <h1>Update Product</h1>
            <input
                type="text"
                placeholder="Title"
                name="title"
                value={productUpdate.title}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Author"
                name="author"
                value={productUpdate.author}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    dispatch(updateProducts(productUpdate, dispatch));
                    navigate('/')
                }}
            >
                Update Product
            </button>
        </div>
    );
}