//C: List Item
import React from 'react';

class ListItem extends React.Component {

    render () {

        const selectedClass = this.props.name === this.props.selected.name ? 'feature__selected' : '';
        const listClass = 'feature__option ' + selectedClass;

        return (
            <li className="feature__item">
                <div
                    className={listClass}
                    onClick={e => this.props.handleUpdate(this.props.name, this.props.item)} >
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