import React from 'react';

const ResultsBook = (props) => {
    return (
        <>
        <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img className="card.img"src={props.thumbnail}/>
            </div>
            <div className="card-content">
            <p className="card-title">{props.title}</p>
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <button className="btn btn-dark" id="viewBtn">View Book</button>
              <button className="btn btn-dark" id="saveBtn">Save Book</button>
            </div>
          </div>
        </div>
      </div>
      </>
    );
};

export default ResultsBook;