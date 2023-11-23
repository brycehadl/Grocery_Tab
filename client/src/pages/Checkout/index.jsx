import React, { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { Button, Card, Alert } from "react-bootstrap";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // Retrieve cart items from sessionStorage
    const storedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  const checkout = () => {
    const productIds = [];

    // Use the items from sessionStorage
    cartItems.forEach((item) => {
      productIds.push(item._id);
    });

    console.log(productIds)

    getCheckout({
      variables: { products: productIds },
    });

  };

  const clearCart = () => {
    // Clear the cart in sessionStorage
    sessionStorage.removeItem("cart");
    // Clear the cart in the component state
    setCartItems([]);
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="container mt-4">
      <h2>Items in Cart:</h2>
      {showAlert && (
        <Alert variant="warning" onClose={handleAlertClose} dismissible>
          No items in the cart!
        </Alert>
      )}
      <div className="row">
        {cartItems.map((item) => (
          <div className="col-md-4 mb-4" key={item._id}>
          <Card>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>Price: ${item.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
        ))}
      </div>
      <div className="mt-3">
        <Button onClick={checkout} variant="primary" >Checkout</Button>
        <Button onClick={clearCart} variant="danger" className="mx-2">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Checkout;
