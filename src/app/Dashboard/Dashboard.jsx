import React, { Component } from 'react';
import PropTypes from 'prop-types'

import MainPanel from '../Components/MainPanel';
import * as constants from '../Components/utils/constants';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.listItems = constants.LIST_ITEMS;
    this.listMeta = constants.LIST_META;
    this.state = {
      filterText: "",
      currentPage: 1,
      itemsPerPage: 8,
      listItems: [],
      itemAllPages: []

    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.changePage = this.changePage.bind(this);
    this.getFilteredList = this.getFilteredList.bind(this);
    this.getPagedList = this.getPagedList.bind(this);
  }
  /**
  * fired when there is an update to the filter(on enter and button click).
  * @returns {Array}
  */
  handleFilterChange(value) {
    let itemAllPages = this.getFilteredList(value);
    let filteredList = this.getPagedList(itemAllPages, 1);//reset to page 1 on filtering
    this.setState({
      filterText: value,
      currentPage: 1,//reset to page 1 on filtering
      listItems: filteredList,
      itemAllPages: itemAllPages
    });
  }
  /**
   * gets the filtered list according to the search term entered.
   * @returns {Array}
   */
  getFilteredList(value) {
    let filteredList = [];
    if (value && value.trim().length !== 0) {
      this.listItems.map((listItem, i) => {
        this.listMeta.map((metaItem, i) => {
          if (listItem[metaItem.key].toString().trim().toLowerCase().indexOf(value.toLowerCase()) !== -1) {
            filteredList.push(listItem);
          }
          return true;
        })
        return true;
      })
    }
    filteredList = [...(new Set(filteredList))];
    return filteredList;
  }
  /**
   * gets the list item for the page.
   * @returns {Array}
   */
  getPagedList(filteredList, currentPage) {
    // Logic for displaying current items
    const indexOfLastItem = currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems;
  }
  /**
   * fired on update to page number . returns paged list
   * @returns {Array}
   */
  changePage(event) {
    let filterList = this.getFilteredList(this.state.filterText);
    let pagedList = this.getPagedList(filterList, Number(event.target.id))
    this.setState({
      currentPage: Number(event.target.id),
      listItems: pagedList
    });
    return pagedList;
  }
  /**
   * Renders the main view.
   * @returns {string}
   */
  render() {
    return (
      <MainPanel filterText={this.state.filterText} handleFilterChange={this.handleFilterChange}
        listItems={this.state.listItems} listMeta={this.listMeta} itemAllPages={this.state.itemAllPages}
        currentPage={this.state.currentPage} itemsPerPage={this.state.itemsPerPage}
        changePage={this.changePage} />
    );
  }
}