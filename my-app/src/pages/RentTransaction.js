import TransactionItem from './TransactionItem.js';

function RentTransaction(props) {
    return (
        <div className="d-flex align-items-center justify-content-center text-center min-vh-100">    
            <TransactionItem className="text-center"
                name={props.name}
                imgFile={props.imgFile}
                location="Austin, Texas"
                condition={props.condition} />
        </div>
    );
};

export default RentTransaction;