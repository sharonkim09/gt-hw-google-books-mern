import React from "react";

const Input = (props) => {
  return (
    <>
      <div className="container">
        <form>
          <input 
          type="text"
          placeholder="Search for a book"
          name="search" 
          value={props.search}
          onChange={props.handleInputChange} />
        </form>
      </div>
    </>
  );
};

export default Input;
