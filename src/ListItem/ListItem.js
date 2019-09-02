import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

const features = Object.keys(this.props.features).map((feature, idx) => {
const featureHash = feature + '-' + idx;
const options = this.props.features[feature].map(item => {
const itemHash = slugify(JSON.stringify(item)
            );
        })
    )
}

class ListItem extends Component {
    render() {
    return (
        <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.state.selected[feature].name}
                    onChange={e => this.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
            </div>
        );
    }
}

export default ListItem;