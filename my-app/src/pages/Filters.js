import {Condition} from './Condition.ts';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React from 'react';
import Item from './Item.js';

class Filters extends React.Component {
    state = { query : "" };

    onChange = e => { this.setState({ query : e.target.value }) };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.query);
        
    };

    render() {
        const items = this.props.products.filter(item => 
            item.name.toLowerCase().includes(this.state.query.toLowerCase())).map((item) => 
        <Item name={item.name} 
              imgFile={item.imgFile}
              condition={Condition[item.condition]}
              price={item.price} />);
        return (    
            <div>
                <div style={{ display: "flex", flexDirection: "col" }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Control style={{width:'700px'}}
                                type="search"
                                value={this.state.query}
                                onChange={this.onChange}
                                placeholder="Search" />
                </Form>
                <Button type="submit">Go!</Button>
                
            </div>
            {items}
            </div>
        );
    }
}

export default Filters;