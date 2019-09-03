import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

const total = Object.keys(this.state.selected).reduce(
    (acc, curr) => acc + this.state.selected[curr].cost,
    0
);

class CartTotal extends Component {
    render () {
        return (
            <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {this.props.summary}
                {USCurrencyFormat.format(total)} </div>
        </div>
        )
    }
}

export default CartTotal;