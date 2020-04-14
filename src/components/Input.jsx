import React from "react";

const Input = ({ value, handleChange }) => {
  return (
    <div className="input-group flex-nowrap search ">
      <input
        className="search_box mx-auto form-control  "
        type="search"
        name="search"
        placeholder="Search Country"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
