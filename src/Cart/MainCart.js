//COMPONENT MAINCART
import React from 'react';
import CartList from './CartList';
import CartTotal from './CartTotal';

class MainCart extends React.Component {

    render () {

        const summary = Object.keys(this.props.selected)
        .map(key => (
            <CartList 
                key={key}
                label={key}
                name={this.props.selected[key].name}
                cost={this.props.selected[key].cost}
                />
        ));
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartTotal
                    selected={this.props.selected}
                />
            </section>
        )
    }
}

export default MainCart;