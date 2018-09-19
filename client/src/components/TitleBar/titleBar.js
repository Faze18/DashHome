import React from "react";
import "../../vendor/notes.css";

const Title = (props) => (
    <div>
      <input id="note" onChange={props.setTitle} name="subject" placeholder="title" style={{height:20,width:80+"%", position:"inherit"}}></input>
    </div>
)
export default Title;