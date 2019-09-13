import React, { Component } from 'react';
import CartTotal from '../CartTotal/CartTotal'

//Do I need to import the List Section? It cannot read state of undefined as it cannot see what is selected?
//But state is in main APP component so that can't be right? 

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Cart extends Component {
    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature];
        return (
                <div className='cart'>
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                   <CartTotal />
        </div> );
        });
        return summary
    }
}

       

export default Cart;