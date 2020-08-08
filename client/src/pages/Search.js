import React, { Component } from 'react';
import Input from "../components/Input";
class Search extends Component {
    state={
        search:""
    }
    handleInputChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <>
                <Input 
                search={this.state.search}
                handleInputChange={this.handleInputChange}
                />
            </>
        );
    }
}

export default Search;