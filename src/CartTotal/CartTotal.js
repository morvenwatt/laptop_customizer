import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  //State is defined in App.js. No state is defined here. 
  //props did not work. What does this need to pull from???
  //Needs to know which items in cart are selected, which is set in main App
  //this needs passed the data of selected items, so it can do this logic block



class CartTotal extends Component {
    render () {
        const total = Object.keys(this.props.total).reduce(
            (acc, curr) => acc + this.props.total[curr].cost,
            0
        );
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