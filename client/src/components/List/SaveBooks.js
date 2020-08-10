import React from "react";

const SaveBooks = (props) => {
  return (
    <div className="entry">
      <div className="header">
      <p>{props.title} <br/>Written by {props.author}</p>
      <div className="buttons">
      <a href={props.link}><button type="button">View</button></a>
      {props.button ? (
      <button onClick={() => props.onClick(props.title,props.author,props.description,props.image,props.link)} type="button">Save</button>
      ) : (
        <button onClick={() => props.onClick(props.id)} type="button">Delete</button>
      )}
      </div>
      </div>
      <p className="description"><img src={props.image} className="image"/>{props.description}</p>
    </div>
  );
}
export default SaveBooks;