//C: List Item
import React from 'react';

class ListItem extends React.Component {

    render () {

        const selectedClass = this.props.name === this.props.selected.name ? "feature__selected" : '';
        const featureClass = "feature__label " + selectedClass;

        return (
            <li className="feature__option">
                <div
                    className={featureClass}
                    onClick={e => this.props.handleUpdate(this.props.featureName, this.props.item)} >
                    {this.props.name}
                    ({new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(this.props.cost)})
                </div>
            </li>
        )
    }
}

export default ListItem;