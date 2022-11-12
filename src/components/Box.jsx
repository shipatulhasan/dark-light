import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeProvider";
import "./Box.css";

const Box = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="box box-bg" id={theme ? "dark" : "light"}>
      <h1>This is box</h1>
    </div>
  );
};

export default Box;
