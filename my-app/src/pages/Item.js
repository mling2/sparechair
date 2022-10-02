import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Item.css';


function Item(props) {
    const navigate = useNavigate();
    const name = props.name;
    const imgFile = props.imgFile;
    const condition = props.condition;
    const price = props.price;

    return (
        <Button className="button" onClick={() => navigate('/transaction', { state : {name, imgFile, condition, price} })} 
                style={{ justifyContent : 'center', color:'#ffffff'}}  >
            <Card style={{ width: '15rem' }}>
            <Card.Title style={{fontSize: '30px', color:'#000000'}}>{props.name}</Card.Title>
            <Card.Img variant="top" src={props.imgFile} style={{ width: '20rem' }}/>
            <Card.Text style={{color:"#000000"}}>Condition: {props.condition}</Card.Text>
            <Card.Text style={{color:"#000000"}}>Price: ${props.price}</Card.Text>
            </Card>
        </Button>
    );
}

export default Item;