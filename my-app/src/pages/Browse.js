import Header from './Header.js';
import Item from './Item.js';
import greenCouch from '../images/greenCouch.jpeg';
import greyCouch from '../images/greyCouch.jpg';
import {Condition} from './Condition.ts';

// function Price() {
//     return ();
// }

function Browse(props) {
    return (
    <div>
        <Header />
        <Item name="Green Couch" 
            imgFile={greenCouch} 
            condition={Condition.GentlyUsed}
            price={100}/>
        <Item name="Grey Couch" 
            imgFile={greyCouch}
            condition={Condition.LikeNew}
            price={150} />
    </div>
    );
};


export default Browse;