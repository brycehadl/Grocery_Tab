import './style.scss';
import { Card, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART, UPDATE_PRODUCT } from "../../utils/actions";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_PRODUCTS } from '../../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PRODUCTS)

  const state = useSelector((state) => state);

  const [alert, setAlert] = useState(null);
  const dispatch = useDispatch();

  const handleAlertClose = () => {
    setAlert(null);
  };

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCT,
        products: data.products
      });

    } else if (!loading) {
      console.log("you are currently offline");
    }
  }, [loading, data, dispatch])


  const addToCart = (id) => {
    const productToAdd = data.products.find((item) => item._id === id);

    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  
    if (productToAdd) {
      // Check if the item already exists in the cart
      const itemExists = cart.some((item) => item._id === id);
  
      if (itemExists) {
        // Show alert if the item already exists in the cart
        setAlert({
          variant: "danger",
          message: "Item already exists in the cart!",
        });
      } else {
        // Save the found product to sessionStorage
        const updatedCart = [...cart, productToAdd];
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
  
        // Dispatch the ADD_TO_CART action
        dispatch({
          type: ADD_TO_CART,
          product: productToAdd,
        });
  
        // Show alert for successful addition
        setAlert({
          variant: "success",
          message: "Item added to the cart!",
        });
      }
    }
  };
  

  const handleButton = async () => {}

  // console.log(data);

  return (
    <div className="container mt-5">
      <h1 className="display-4">Checkout Out Discounted Local Products Below!</h1>
      <hr className="my-4" />

      <div className='container fixed-bottom'>
      {alert && (
        <Alert variant={alert.variant} onClose={handleAlertClose} dismissible>
          {alert.message}
        </Alert>
      )}
      </div>

      {data && (
        <div className="row">
          {data.products.map((item) => (
            <div className="col-md-3 mb-4" key={item._id}>
              <Card>
                {/* Use a ternary operator to conditionally render the image */}
                <Card.Img
                  variant="top"
                  src={item.image ? `/images/${item.image}` : 'https://via.placeholder.com/300'}
                  alt={"picture of " + item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>Price: ${item.price}</Card.Text>
                  <Button variant="primary" small className='w-100' onClick={() => addToCart(item._id)}>Add To Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
