import React from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <div className="container__Navbar">
      <div className="wrapper">
        <div className="Left">
          <span>EN</span>
          <div className="searchContainer">
            <input type="text" />
            <SearchOutlinedIcon style={{ color: "grey", fontSize: 16 }} />
          </div>
        </div>
        <div className="Center">ShopNow.</div>

        <div className="Right">
          <div className="MenuItem">Register</div>
          <div className="MenuItem">Sign IN</div>
          <div className="MenuItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
