import React from 'react';
import MainList from './MainList';

class SelectionForm extends React.Component {

    render() {
        const features = Object.keys(this.props.features)
            .map(key =>
                <MainList
                    key={key}
                    name={key}
                    features={this.props.features[key]}
                    handleUpdate={this.props.handleUpdate}
                    selected={this.props.selected}
                />);
        return (
            <section className='main__form'>
                <h2>Customize your laptop</h2>
                {features}
            </section>
        )
    }
}

export default SelectionForm;