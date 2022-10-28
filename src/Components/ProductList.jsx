import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProducts, getProducts } from "../JS/Actions/productActions";
import Carousel from 'react-bootstrap/Carousel';
import Vert from '../Assets/ensemblev.JPG'
import Noir from '../Assets/roben.JPG'
import Blanc from '../Assets/robeb.JPG'
import Jaune from '../Assets/robej.JPG'
import Multi from '../Assets/joggcote.JPG'

function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.productReducer.products);
    useEffect(() => {
        dispatch(getProducts(dispatch));
    }, [dispatch,products]);
    console.log(products);
    return (
        
            <>    
                <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Vert}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Noir}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Blanc}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Jaune}
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={Multi}
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
              <div>
              {
                products.map((product) => {
                    console.log(product)
                    return (
                        <div key={product.id}>
                            {product.title}
                            {product.author}
                            <br></br>
                            <button
                                onClick={() =>
                                    dispatch(deleteProducts(product.id))
                                }
                            >
                             Delete 
                            </button>
                            
                            <Link to={`/update/${product.id}`}>
                                <button>Edit</button>
                            </Link>
                        </div>
                    );
                })
            }
        </div>
        </>
    );
}

export default ProductList;