import React from "react";
import MainNote from "../mainNote";
import Col1 from "../../components/Col1";
const Col6 = (props) => (
    <div className="w3-col m6 ">
        <div className="w3-row-padding">
       
            {props.childComponent1}
            {props.childComponent2}
            {props.childComponent3}
            {props.childComponent4}
            {props.childComponent5}
            {props.childComponent6}
            {props.childComponent7}
        </div>
    </div>
)
export default Col6;
