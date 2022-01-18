import React, { useContext, useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import classes from "./NavProfileButton.module.css";

const NavProfileButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <FaUserAlt />
    </button>
  );
};

export default NavProfileButton;
