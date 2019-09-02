import React from 'react';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class Cart extends Component {
    render() {
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
        );

        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const selectedOption = this.state.selected[feature]; 
        }
            return (
                <div className='cart'>
                    <div className="summary__option" key={featureHash}>
                        <div className="summary__option__label">{feature} </div>
                        <div className="summary__option__value">{selectedOption.name}</div>
                        <div className="summary__option__cost">
                            {USCurrencyFormat.format(selectedOption.cost)}
                        </div>
                    </div>
                    <div className="summary__total">
                        <div className="summary__total__label">Total</div>
                        <div className="summary__total__value">
                            {summary}
                            {USCurrencyFormat.format(total)} </div>
                    </div>
                </div>
            );
        }
}

export default Cart;