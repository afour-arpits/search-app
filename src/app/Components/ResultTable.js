import React, { Component } from 'react'
import TableRow from './TableRow'
export default class ResultTable extends Component {
    render() {
        let filteredList = this.props.listItems;
        let listMeta = this.props.listMeta;
        if(filteredList.length === 0){
            return (
                <div className="row p-3">
                <span className="m-auto lead">Sorry no records found,<br/>update the search criteria to get results</span>
                </div>
            )
        }else{
            return (
                <div className="table-responsive">
                <table className="table table-striped  p-auto">
                    <thead>
                        <tr>
                            {listMeta.map((metaInfo,i) => 
                                <th key={i}>{metaInfo.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredList.map((listItem,i) => 
                            <TableRow filterText={this.props.filterText} key={i} item={listItem} listMeta={listMeta}/>
                        )}
                    </tbody>
                </table>
                </div>
            )
        }
  }
}
