import {Form} from "react-router-dom";
import { Condition } from "./Condition.ts";

function SellerForm() {
    return (
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
            <label>
                <span>Images</span>
                <input type="file" multiple/>
            </label>
        </Form>
    );
};

export default SellerForm;