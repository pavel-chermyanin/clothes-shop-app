import "./cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://www.gotceleb.com/wp-content/uploads/photos/joan-smalls/impromptu-photoshoot-in-nyc/Joan-Smalls:-Impromptu-Photoshoot--12.jpg",
      img2: "https://www.hawtcelebs.com/wp-content/uploads/2015/06/joan-smalls-at-impromptu-photoshoot-in-new-york_5.jpg",
      title: "Long Sleeve Graphic t-short",
      desc: "Long Sleeve Graphic t-short DESC",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://i.pinimg.com/736x/92/b9/bf/92b9bfecaa9aa3818457ac132da7e278.jpg",
      img2: "https://i.pinimg.com/originals/aa/26/f7/aa26f722b4b6da712960ea38ce83355e.jpg",
      title: "Long Sleeve Graphic t-short",
      desc: "Long Sleeve Graphic t-short DESC",

      isNew: true,
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0,100)}</p>
            <div className="price">1 x ${item.price}</div>
          </div>
          <DeleteOutlineIcon className="delete"/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
