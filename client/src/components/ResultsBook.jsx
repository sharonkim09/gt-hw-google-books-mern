import React from "react";

const ResultsBook = (props) => {
  return (
    <>
      <div className="row">
        <div className="col s4">
          <div className="card">
            <div className="card-image">
              <img className="card.img" src={props.thumbnail} />
            </div>
            <div className="card-content">
              <h2>{props.title}</h2>
              <h3>
                {props.author}
              </h3>
              <p>
                {props.description}
              </p>
            </div>
            <div className="card-action">
              <button className="btn btn-dark" id="viewBtn">
                View Book
              </button>
              <button className="btn btn-dark" id="saveBtn">
                Save Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultsBook;
