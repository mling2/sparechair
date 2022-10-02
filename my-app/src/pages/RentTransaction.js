import TransactionItem from './TransactionItem.js';
import greenCouch from '../images/greenCouch.jpeg';

function RentTransaction() {
    return (
        
        <div className="d-flex align-items-center justify-content-center text-center min-vh-100">    
            <TransactionItem className="text-center"
                name="Green Couch" 
                imgFile={greenCouch}
                location="Austin, Texas"
                condition="Lightly Used" />
        </div>
    );
};

export default RentTransaction;