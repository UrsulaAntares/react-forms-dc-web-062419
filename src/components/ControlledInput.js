// Code ControlledInput Component Here
import React, { Component } from 'react'


class ControlledInput extends Component {

    state = {
        firstName: "Urs",
        lastName: "Mil"
    }

    // handleFirstName=(event)=>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastName=(event)=>{
    //     this.setState({lastName: event.target.value})
    // }
    

    handleAnything=(event)=> {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        return <form>
            <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleAnything}></input>
            <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleAnything}></input>
        </form>
    }
}

export default ControlledInput