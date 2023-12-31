// import React, { useEffect } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { QUERY_CHECKOUT } from "../../utils/queries";
// import { useSelector, useDispatch } from "react-redux";
// import { loadStripe } from "@stripe/stripe-js";
// import './style.scss';

// const stripePromise = loadStripe("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// function Checkout() {
//   const state = useSelector((state) => state);

//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
//   console.log(data);

//   useEffect(() => {
//     if (data) {
//       stripePromise.then((res) => {
//         res.redirectToCheckout({ sessionId: data.checkout.session });
//       });
//     }
//   }, [data]);

//   const checkout = () => {
//     const productIds = [];

//     state.cart[0].products.forEach((item) => {
//       productIds.push(item._id);
//     });
//     console.log(productIds);

//     getCheckout({
//       variables: { products: productIds },
//     });
//   };

//   return (
//     <div>
//       <button onClick={checkout}>Checkout</button>
//     </div>
//   );
// }

// export default Checkout;
