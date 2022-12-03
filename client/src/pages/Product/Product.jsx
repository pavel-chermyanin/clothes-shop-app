import { useState } from "react";
import "./product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareIcon from "@mui/icons-material/Compare";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "https://i.pinimg.com/736x/c8/7f/c9/c87fc968394483d120911fa73625c541--motorcycle-boot-school-fashion.jpg",
    "https://i.pinimg.com/736x/79/d4/a1/79d4a18b16f782fd862f66d8739b00dd--all-black-outfit-black-outfits.jpg",
  ];

  return (
    <div className="product">
      <div className="container">
        <div className="productWrapper">
          <div className="left">
            <div className="images">
              <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
              <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
            </div>
            <div className="mainImg">
              <img src={images[selectedImg]} alt="" />
            </div>
          </div>
          <div className="right">
            <h1>Title</h1>
            <span className="price">$199</span>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus
              voluptas mollitia facilis cum accusantium alias reiciendis
              nesciunt quo quidem quisquam.
            </p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add">
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
    </div>
  );
};

export default Product;
