import React, { Component } from 'react'

export default class Pagination extends Component {
    constructor() {
        super();
        this.changePage = this.changePage.bind(this);
    }
    changePage(e){
        this.props.changePage(e);
        return false;
    }
    render() {
          const {
              itemAllPages,
              currentPage,
              itemsPerPage
          } = this.props;
          // Logic for displaying page numbers
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(itemAllPages.length / itemsPerPage); i++) {
              pageNumbers.push(i);
          }
          const renderPageNumbers = pageNumbers.map(number => {
              let activeClass = "page-item";
              if(number === currentPage){
                activeClass += " active";
              }
          return (
            <li className={activeClass} key={number}>
                <button className="page-link" id={number} onClick={this.changePage}>{number}</button>
            </li>
          );
    });

    return (
      <div>
        <ul id="page-numbers" className="pagination">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}
