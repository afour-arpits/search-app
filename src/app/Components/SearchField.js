import React, { Component } from 'react'

export default class SearchField extends Component {
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
    handleKeyUp(e){
        if(e.keyCode === 13){
            this.updateFilterCondition(e.target.value)
        }
    }
    handleButtonClick(e){
        this.updateFilterCondition(this.searchField.value)
    }
    updateFilterCondition(value){
        this.props.handleFilterChange(value);
    }
  render() {
    return (
        <div className="form-group m-auto d-flex justify-content-center p-3">
            <input className="w-100 form-control mr-1" type="text" placeholder="Search Candidate by keywords" 
            onKeyUp={this.handleKeyUp} ref={(input) => this.searchField = input}/>
            <button className="btn btn-primary" onClick={this.handleButtonClick}>Search</button>
        </div> 
   )
  }
}
