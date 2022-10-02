import {Form} from "react-router-dom";
import { Condition } from "./Condition.ts";
import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

function SellerForm() {
    const [file, setFile] = useState();

    const handleChange = (e) => {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                    <label>
                        <span>Listing Name</span>
                        <input />
                    </label>
                    <br />
                    <label>
                        <span>Price</span>
                        <input />
                    </label>
                    <br />
                    <label>
                        <span>Condition</span>
                        <select>
                            {Object.keys(Condition).map(key => (
                                <option>{Condition[key]}</option>
                            ))}
                        </select>
                    </label>
                    <br />  
                    </Form>
                </Col>
                <Col>
                     
                        <span>Images</span>
                        <input type="file" onChange={handleChange} />
                        <img src={file} />
                 
                </Col>
            </Row>
        </Container>
        
        
    );
};

export default SellerForm;