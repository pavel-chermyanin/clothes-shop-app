import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import imgFlag from "../Navbar/flag.png";
import "./leftbar.scss";

const LeftBar = ({ setLeftBar, leftBar }) => {
  useEffect(() => {
    const hideLeftBar = (e) => {
      e.stopPropagation();
      if (e.target.classList.contains("leftbar")) {
        console.log("leftbar");
      } else {
        setLeftBar(false);
      }
    };
    window.addEventListener("click", hideLeftBar);
    document.body.style.overflowY = "hidden";

    return () => {
      window.removeEventListener("click", hideLeftBar);
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className="leftbar" >
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
      </div>
    </div>
  );
};

export default LeftBar;
