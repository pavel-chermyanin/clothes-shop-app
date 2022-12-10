import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./navbar.scss";
import { Link } from "react-router-dom";
import imgFlag from "./flag.png";
import Cart from "../Cart/Cart";
import LeftBar from "../Leftbar/Leftbar";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [leftBar, setLeftBar] = useState(false);
  const products = useSelector((state) => state.cart.products);

  useEffect(() => {
    const hideLeftBar = () => {
      setLeftBar(false);
    };
    window.addEventListener("resize", hideLeftBar);

    return () => {
      window.removeEventListener("resize", hideLeftBar);
    };
  }, []);
  return (
    <div className="navbar ">
      {leftBar && (
        <>
          <LeftBar setLeftBar={setLeftBar} leftBar={leftBar} />
          <div className="layer"></div>
        </>
      )}
      <div className="container">
        <div className="wrapper">
          <div
            className="burger-menu"
            onClick={(e) => {
              e.stopPropagation();
              setLeftBar(!leftBar);
            }}
          >
            <MenuOpenIcon />
          </div>
          <div className="left">
            <div className="item">
              <img src={imgFlag} alt="" width={40} height={20} />
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              USD
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className="link" to="/products/1">
                Women
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/2">
                Men
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/products/3">
                Children
              </Link>
            </div>
          </div>
          <div className="center">
            <Link className="link" to="/">
              PAVELSTORE
            </Link>
          </div>
          <div className="right">
            <div className="item">
              <Link className="link" to="/">
                Homepage
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                About
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Contacts
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/">
                Stories
              </Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart openCart={setOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
