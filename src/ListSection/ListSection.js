import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class ListSection extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <ListItem
                        itemHash={itemHash}
                        feature={slugify(feature)}
                        itemName={item.name}
                        itemCost={USCurrencyFormat.format(item.cost)}
                        checked={item.name === this.props.selected[feature].name} />

                );
            });
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );

        });
        return features
    }
}

export default ListSection;