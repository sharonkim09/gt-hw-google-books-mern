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
