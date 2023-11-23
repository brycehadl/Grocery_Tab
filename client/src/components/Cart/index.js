import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QUERY_PRODUCTS } from "../../utils/queries";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { ADD_TO_CART } from "../../utils/actions";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { data } = useQuery(QUERY_PRODUCTS);


  const addToCart = () => {
    dispatch({
      type: ADD_TO_CART,
      product: data,
    });
  };

  return (
    <div>
      <h1>Testing</h1>
      <button onClick={addToCart}>Add to cart</button>
      {/* <button onClick={checkout}>Checkout</button> */}
    </div>
  );
}

export default Cart;
