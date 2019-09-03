import React, { Component } from 'react';


class ListItem extends Component {
    render() {
    return (
        <div key={this.props.itemHash} className="feature__item">
                <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.feature}
                    checked={this.props.checked}
                    onChange={e => this.updateFeature(this.props.feature, this.props.item)}
                />
                <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.itemName} {this.props.itemCost}
            </label>
            </div>
        );
    }
}

export default ListItem;