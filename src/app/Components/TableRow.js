import React, { Component } from 'react'

export default class TableRow extends Component {
    /**
     * Renders the view.
     * @returns {string}
     */
    render() {
        let tds = [];
        this.props.listMeta.map((metaInfo,i) => 
            tds.push(<td key={i}>{this.props.item[metaInfo.key]}</td>)
        )
        return (<tr>{tds}</tr>)
  }
}
