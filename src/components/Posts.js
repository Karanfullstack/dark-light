import React from "react";
import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
const Posts = () => {
  const {theme, handelTheme} = useContext(ThemeContext);

  return (
    <div>
      <h4>My Post With {theme}</h4>
      <button
        onClick={handelTheme}
        className={`btn ${theme === "dark" ? "btn-dark" : "btn-light"}`}
      >
        {theme === "dark" ? "Click to light" : "Click to dark"}
      </button>
    </div>
  );
};

export default Posts;
