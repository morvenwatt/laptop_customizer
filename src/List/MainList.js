//COMPONENT MAINLIST
import React from 'react';
import ListSection from './ListSection';

class MainList extends React.Component {

    render () {
        return (
           <div className="feature" key={this.props.name}>
               <div className='feature__name'>{this.props.name}</div>
               <ListSection
                name={this.props.name}
                features={this.props.features}
                handleUpdate={this.props.handleUpdate}
                selected={this.props.selected}
                />
            </div>
        )
    }
}

export default MainList;

