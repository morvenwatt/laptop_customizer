import React, { Component } from 'react';
import List from './List/List';
import Header from './Header/Header';
import Cart from './Cart/Cart';
import './App.css';


 
//(MW) State must live in main App component as it is needed by both the list component and the cart component.
class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

 


  

   render () {
    return (
      <div className="App">

        <Header />

        <main>

          <form className="main__form">
            <h2>Customize your laptop</h2>
            <List 
            features={this.props.features}
            selected={this.state.selected}
            
            />
          </form>

          <section className="main__summary">
            <h2>Your cart</h2>
          <Cart 
          summary={this.props.summary}
          selected={this.state.selected}
          />
          </section>

        </main>

      </div>
    );
  }
}

export default App;
