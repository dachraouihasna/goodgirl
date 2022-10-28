import axios from "axios";

export const addProduct = (product) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:3000/products", product);
        console.log(res)
        dispatch({
            type: "POST-PRODUCTS",
            payload: res.data
        });
    }
    catch (err) {
        console.log(err);
    }
};

export const getProducts = () =>async (dispatch) => {
    try {
        const res = await axios.get("http://localhost:3000/products");
        console.log(res.data);
        dispatch({
            type: "GET_PRODUCTS",
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const deleteProducts = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`http://localhost:3000/products/${id}`);
        console.log(res);
        dispatch({
            type: "DELETE_PRODUCTS",
            payload: id,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateProducts = (product) => async (dispatch) => {
    try {
        const res = await axios.put(
            `http://localhost:3000/products/${product.id}`,
            product
        );
        console.log(res);
        dispatch({
            type: "PUT_PRODUCTS",
            payload: product,
        });
    } catch (err) {
        console.log(err);
    }
};

export const getProductById = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:3000/products/${id}`);
        console.log(res.data);
        dispatch({
            type: "GET_PRODUCT_BY_ID",
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
