import Item from './Item.js';
import {Condition} from './Condition.ts';
import productData from './products.js';
import React from 'react';
import Filters from './Filters.js';


class Browse extends React.Component {
    render() {
        <Filters />
        const items = productData.map((item) => 
        <Item name={item.name} 
              imgFile={item.imgFile}
              condition={Condition[item.condition]}
              price={item.price} />);
        return (
            <div>{items}</div>
            );
    }
};


export default Browse;