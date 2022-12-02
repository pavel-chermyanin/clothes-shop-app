import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar ">
      <div className="container">
        <div className="wrapper">
          <div className="left">
            <div className="item">
              <img src="./img/flag.png" alt="" width={40} height={20} />
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
              <div className="cartIcon">
                <ShoppingCartIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
