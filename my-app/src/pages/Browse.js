import Header from './Header.js';
import Item from './Item.js';
import greenCouch from '../images/greenCouch.jpeg';
import greyCouch from '../images/greyCouch.jpg';

// function Price() {
//     return ();
// }

// function Filters() {
//     return ();
// }

function Browse() {
    return (
    <div>
        <Item name="Green Couch" imgFile={greenCouch} />
        <Item name="Grey Couch" imgFile={greyCouch} />
    </div>
    );
};


export default Browse;