import { result } from "lodash";
import React, { Component } from "react"

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {
            data = GetDate()
        }
    }
}

function GetDate(params) {
    fetch("http://localhost:8888/UserQuery/UserList",{method : 'Get'})
    .then(res => res.json())
    .then(data =>{
        
    })
    return result
}
