//IMPORTS
import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import SelectionForm from './List/SelectionForm';
import MainCart from './Cart/MainCart';

//MAIN APP

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
}

updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState ({
        selected
    });
}

render () {

    return (
        <div className='App'>
            <Header />
            <main>
            <SelectionForm 
                    features={this.props.features}
                    selected={this.state.selected}
                    handleUpdate={this.updateFeature} />
                <MainCart
                    selected={this.state.selected} />
            </main>
        </div>
    );
}
}

export default App;