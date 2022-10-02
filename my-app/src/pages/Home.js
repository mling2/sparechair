import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import {Condition} from './Condition.ts';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: 0,
            minPrice: 0,
            maxPrice: 0,
            condition: Condition.BrandNew,
            startDate: new Date(),
            endDate: new Date(),
        };
    }

    onChangeInput = (e) => {
        e.preventDefault();
        this.setState({
            zip: e.target.zip,
            minPrice: e.target.minPrice, 
            maxPrice: e.target.maxPrice,
            condition: e.target.condition,
            startDate: e.target.startDate,
            endDate: e.target.endDate,
        });
    }

    onChangeHandler = (e) => {
        return (
            <Router>
                <Link
                    to={{
                    pathname: "/browse",
                    state: { 
                        zip: this.state.zip,
                        minPrice: this.state.minPrice,
                        maxPrice: this.state.maxPrice,
                        condition: this.state.condition,
                        startDate: this.state.startDate,
                        endDate: this.state.endDate },
                    }}
                >
                    Search
                </Link>
            </Router>
        );
    }

    render() {
        return (
            <div>
              <div style={{ display: 'flex', 
              width: 700, 
              padding: 30 }}>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  Sell
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  Buy
                </Dropdown.Toggle>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="success">
                  Rent
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <form>
                    <label>
                        Zip Code:&nbsp;
                        <input type="text" name="zip" onChange = {this.onChangeInput} />
                    </label>
                    <label>
                        Min $:&nbsp;
                        <input type="text" name="min" onChange = {this.onChangeInput} />
                    </label>
                    <label>
                        Max $:&nbsp;
                        <input type="text" name="max" onChange = {this.onChangeInput} />
                    </label>
                    <label>
                        Condition:&nbsp;
                        <select>
                            {Object.keys(Condition).map(key => (
                                <option key={key}>{Condition[key]}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Start Date:&nbsp;
                        <input type="text" name="start" onChange = {this.onChangeInput} />
                    </label>
                    <label>
                        End Date:&nbsp;
                        <input type="text" name="end" onChange = {this.onChangeInput} />
                    </label>
                </form>
                </Dropdown.Menu>
              </Dropdown>
              <button >
                Search
              </button>
            </div>
        </div>
        );
    }
};

export default Home;