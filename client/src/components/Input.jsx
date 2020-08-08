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
          <button 
          className="btn btn-dark"
          onClick={props.handleFormSubmit}>
            Search
            </button>
        </form>
      </div>
    </>
  );
};

export default Input;
