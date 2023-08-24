import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, path }) => {
  return (
    <Link to={path || "/"}>
      <button className="bg-[#3498db] text-white py-2 px-2 rounded-md">
        {text}
      </button>
    </Link>
  );
};

export default Button;
