import productData from './products.js';
import React from 'react';
import Filters from './Filters.js';


class Browse extends React.Component {
    render() {
        return (
            <div>
                <Filters products = {productData}/></div>
            );
    }
};


export default Browse;