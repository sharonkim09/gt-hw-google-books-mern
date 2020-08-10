import React, { useState, useEffect } from "react";

import ResultsBook from "../components/ResultsBook/ResultsBook";
import API from "../utils/API";

const Saved = () => {
  const [saved, setSaved] = useState([]);
  useEffect(() => {
    loadSaved();
  }, []);

  const loadSaved=()=>{
    API.getBooks()
      .then((res) => setSaved(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <p>fjieorfjieofjoe</p>
      {saved.map((book) => (
        <ResultsBook
          key={book._id}
          id={book._id}
          thumbnail={book.thumbnail}
          title={book.title}
          description={book.description}
          author={book.authors}
          link={book.infoLink}
        />
      ))}
    </>
  );
};

export default Saved;
