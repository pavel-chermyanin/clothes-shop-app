import { useEffect, useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="product">
      {loading ? (
        "Loading..."
      ) : (
        <div className="container">
          <div className="productWrapper">
            <div className="left">
              <div className="images">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img")}
                />
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=""
                  onClick={(e) => setSelectedImg("img2")}
                />
              </div>
              <div className="mainImg">
                <img
                  src={
                    process.env.REACT_APP_UPLOAD_URL +
                    data?.attributes[selectedImg]?.data?.attributes?.url
                  }
                  alt=""
                />
              </div>
            </div>
            <div className="right">
              <h1>{data?.attributes?.title}</h1>
              <span className="price">${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className="quantity">
                <button
                  onClick={() =>
                    setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                  }
                >
                  -
                </button>
                {quantity}
                <button onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <button
                className="add"
                onClick={() => {
                  toast("Added to Cart");
                  dispatch(
                    addToCart({
                      id,
                      title: data.attributes.title,
                      desc: data.attributes.desc,
                      img: data.attributes.img.data.attributes.url,
                      price: data.attributes.price,
                      quantity,
                    })
                  );
                }}
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className="links">
                <div className="item">
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
                <div className="item">
                  <CompareIcon /> ADD TO COMPARE
                </div>
              </div>
              <ToastContainer position="bottom-right" autoClose={2000} />
              <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATTION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
