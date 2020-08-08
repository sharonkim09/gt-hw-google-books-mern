import React from "react";

const ResultsBook = (props) => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img className="card.img" src={props.thumbnail} style={{width:"200px"}}/>
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
              <a className="btn btn-dark" href={props.link}id="viewBtn">
                View Book
              </a>
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
