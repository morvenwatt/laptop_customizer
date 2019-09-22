import React, { Component } from 'react';
import CartTotal from '../CartTotal/CartTotal'

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  //Where is summary coming from? Why would this throw the error that
  //undefined/null cannot be converted to an object?
  //<CartTotal total={this.props.selected}/> WHERE DOES THIS GO?!?!?!?!

class Cart extends Component {
    render() {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.props.selected[feature];
        return (
                <div className='cart'>
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>        
        </div> 
        );
        });
        return (
            <div>
                {summary}
                <CartTotal total={this.props.selected}/>
            </div>)
    }   
}

       

export default Cart;