import React, { Component } from 'react';
import ListItem from './ListItem/ListItem';

class ListSection extends Component {
    render (){
        return (
            <div>
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
        <h3>{this.props.feature}</h3>
        </legend>
        <ListItem />
        {this.props.features} 
        </fieldset>
            </div>
        )
    }
}

export default ListSection;