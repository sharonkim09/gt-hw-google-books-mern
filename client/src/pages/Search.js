import React, { Component } from 'react';
import Input from "../components/Input";
import API from '../utils/API';
import ResultsBook from '../components/ResultsBook';
class Search extends Component {
    state={
        search:"",
        books:[]
    }
    componentDidMount(){
        API.getBooks("Harry Potter").then((res)=>{
            console.log(res.data.items)
            this.setState({
                books:res.data.items
            })
        }).catch((err)=>{
            console.log(err)
        })
    }
    handleInputChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log("Clicked button");
        API.getBooks(this.state.search).then(console.log(this.state.search.data))
    }
    render() {
        return (
            <>
                <Input 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
                {this.state.books.map((book,i)=>{
                    return( 
                        <ResultsBook 
                    thumbnail={book.volumeInfo.imageLinks.smallThumbnail}
                    title={book.volumeInfo.title}
                    description={book.volumeInfo.description}
                    author={book.volumeInfo.authors}
                    />
                    )
                })}
         
            </>
        );
    }
}

export default Search;