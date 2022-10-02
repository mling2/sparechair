import {Form} from "react-router-dom";

import { Condition } from "./Condition.ts";
import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SellerForm() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [file, setFile] = useState();
    const [name, setName] = useState("");

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setName(e.target.value);
        } else {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }   
    }
    
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                    <label>
                        <span>Listing Name</span>
                        <input name="name" value={name} onChange={handleChange}/>
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
                                <option key={key}>{Condition[key]}</option>
                            ))}
                        </select>
                    </label>
                    <br />  
                    </Form>
                </Col>
                <Col>
                     
                        <span>Images</span>
                        <input type="file" onChange={handleChange} />
                        <img src={file} alt=""/>
                 
                </Col>
            </Row>
            <Row>
                <input type="submit" onClick={handleShow}/>
            </Row>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Listing confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Congrats on listing your rental for {name}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    );
};

export default SellerForm;