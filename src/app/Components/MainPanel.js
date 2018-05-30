import React, { Component } from 'react';
import SearchField from './SearchField';
import ResultTable from './ResultTable';
import Pagination from './Pagination';

export default class MainPanel extends Component {
    constructor(props){
        super(props);
        this.handleFilterChange = this.handleFilterChange.bind(this);
    }
    handleFilterChange(value){
        this.props.handleFilterChange(value);
    }
    render() {
        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 col-sm-12 ">
                    <SearchField handleFilterChange={this.handleFilterChange}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-sm-12 ">
                    <ResultTable filterText={this.props.filterText} handleFilterChange={this.handleFilterChange} listItems={this.props.listItems} listMeta={this.props.listMeta}/>
                </div>
            </div>
            <div className="row position-fixed bottom-0">
                <div className="col-md-12 col-sm-12 ">
                    <Pagination filterText={this.props.filterText} handleFilterChange={this.handleFilterChange} 
                    listItems={this.props.listItems} listMeta={this.props.listMeta} itemAllPages={this.props.itemAllPages}
                    currentPage={this.props.currentPage} itemsPerPage={this.props.itemsPerPage} changePage={this.props.changePage}/>
                </div>
            </div>
        </div>
        )
    }
}
