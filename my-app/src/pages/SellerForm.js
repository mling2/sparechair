import {Form} from "react-router-dom";

function SellerForm() {
    return (
        <Form>
            <label>
                <span>Listing Name</span>
                <input />
            </label>
            <br />
            <label>
                <span>Furniture Type</span>
                <select>
                    <option>Chair</option>
                    <option>Couch</option>
                    <option>Table</option>
                    <option>Bed</option>
                </select>
            </label>
            <br />
            <label>
                <span>Price</span>
                <input />
            </label>
        </Form>
    );
};

export default SellerForm;