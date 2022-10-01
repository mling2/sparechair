import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
        <Button>
            <Card style={{ width: '18rem' }}>
            <Card.Title style={{fontSize: '20px', color:'#000000', }}>{props.name}</Card.Title>
            <Card.Img variant="top" src={props.imgFile} style={{ width: '18rem' }}/>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            </Card>
        </Button>
    );
}

export default Item;