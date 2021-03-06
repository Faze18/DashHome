import React from "react";
import moment from 'moment';

const MeBox = ( props ) => (
    <div className="w3-container w3-card w3-white w3-round w3-margin">
        <br />
        <span className="w3-right w3-opacity">{moment().format('MMM Do YYYY')}</span>
        <h4>{props.name}</h4>
        <br />
        <hr className="w3-clear" />
        <p>Text about me
              </p>
        <div className="w3-row-padding" 
        style={{margin:0 -16}}
        >
            <div className="w3-half">
            <br/>
            </div>
            <div className="w3-half">
            <br/>
            </div>
        </div>

        <button type="button" className="w3-button w3-round w3-onhover-black w3-theme-d2 w3-margin-bottom">
            <i className="fa fa-pencil"></i> Edit</button>
    </div>
)
export default MeBox;