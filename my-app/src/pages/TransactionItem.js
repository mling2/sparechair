import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function KitchenSinkExample(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.imgFile} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          Couch that I bought in college. Used for 2 years.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Location: {props.location}</ListGroup.Item>
        <ListGroup.Item>Item Condition: {props.condition}</ListGroup.Item>
        <ListGroup.Item>Dimensions: 6 x 3 x 4 ft</ListGroup.Item>
        <ListGroup.Item>Cost: $40</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="primary"  onClick={handleShow}>Confirm</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Purchase confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Congrats on confirming your Green Couch rental! :D</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;