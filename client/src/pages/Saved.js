import React, { Component } from "react";
import API from "../utils/API";
import ResultsBook from "../components/ResultsBook/ResultsBook";
import SaveBooks from "../components/List/SaveBooks"
class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then((res) => this.setState({ books: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <div>
          <h1>(React) Google Books Search</h1>
          <h4>Search for and Save Books of Interest</h4>
        </div>
        <div>
          {this.state.books.map((book) => (
            <SaveBooks
              key={book._id}
              id={book._id}
              link={book.link}
              title={book.title}
              author={book.authors}
              description={book.description}
              image={book.image}
              button={false}
              onClick={this.deleteBook}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Saved;
