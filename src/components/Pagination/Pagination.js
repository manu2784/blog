import React from "react";
import {Button} from "@material-ui/core";

export default function Pagination(props){
    return (
        <div>
            <Button onClick={()=>{props.handler("down")}}>Prev</Button>
            <Button onClick={()=>{props.handler("up")}}>Next</Button>
        </div>
    )
}