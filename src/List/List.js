import React, { Component } from 'react';
import ListSection from '../ListSection/ListSection';



class List extends Component {
    render (){
        return (
            <div>
                <ListSection 
                features={this.props.features}
                selected={this.props.selected}/>
            </div>
        )
    }
}

export default List;