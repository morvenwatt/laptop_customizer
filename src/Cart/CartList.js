//C: Cart List
import React from 'react';

class CartList extends React.Component {

    render () {
        return (
            <div className="summary__option">
                <div className="summary__option__label">{this.props.label}</div>
                <div className="summary__option__value">{this.props.name}</div>
                <div className="summary__option__cost">{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(this.props.cost)}</div>
            </div>
        )
    }
}

export default CartList;