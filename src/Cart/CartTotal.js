
//C: Cart Total
import React from 'react';

class CartTotal extends React.Component {

    render () {
        const total = Object.keys(this.props.selected)
            .reduce((acc, currency) => acc + this.props.selected[currency].cost, 0);

    return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">{new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(this.props.cost)}</div>
        </div>
        )
    }
}


export default CartTotal;