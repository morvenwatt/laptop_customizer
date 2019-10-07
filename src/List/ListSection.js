//C: List Section
import React from 'react';
import ListItem from './ListItem';

class ListSection extends React.Component {

    render() {
        const itemFeatures = this.props.features
        .map((item, idx) => {
            return (
                <ListItem 
                    key={idx} 
                    name={item.name} 
                    featureName={this.props.name}
                    cost={item.cost} 
                    selected={this.props.selected[this.props.name]} 
                    item={item} 
                    handleUpdate={this.props.handleUpdate}
                />
            )
        });

    return (
        <ul className='feature__item'>
        { itemFeatures }
        </ul>
        )
    }
}

export default ListSection;