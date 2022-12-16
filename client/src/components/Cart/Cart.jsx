import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../makeRequest";

const Cart = ({ openCart }) => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const stripePromise = loadStripe(
    "pk_test_51LdxGjH6OmYKHQ6yn2VYxAZmN3xuVCFIZXzX0Z3vKRbE9Y1WBA36tQPMH6zAP70M0L1AZn8O7PUiVvVNAmq5e2T9000HLjksUp"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post('/orders', {
        products
      })
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      })
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => (total += item.quantity * item.price));
    return total.toFixed(2);
  };

  useEffect(() => {
    const hideCart = (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("dark-layer")) {
        openCart(false);
      }
    };
    window.addEventListener("click", hideCart);

    return () => {
      window.removeEventListener("click", hideCart);
    };
  }, []);
  return (
    <>
      <div className="dark-layer"></div>
      <div className="cart">
        <h1>Products in your cart</h1>
        {products?.map((item) => (
          <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.desc?.substring(0, 100)}</p>
              <div className="price">
                {item.quantity} x ${item.price}
              </div>
            </div>
            <DeleteOutlineIcon
              className="delete"
              onClick={() => dispatch(removeItem(item.id))}
            />
          </div>
        ))}
        <div className="total">
          <span>SUBTOTAL</span>
          <span>${totalPrice()}</span>
        </div>
        <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
        <span className="reset" onClick={() => dispatch(resetCart())}>
          Reset Cart
        </span>
      </div>
    </>
  );
};

export default Cart;
