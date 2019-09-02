import React from 'react';
import './Form.css';

class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {fullName:'Faiz Ahmad Ansari',
                      email: 'ansarifaiz32@gmail.com',
                      mobileNumber : '7775995030',
                      message: 'Faiz is an awesome web developer'
        }
    }
/*
    handleName = (event) => {
        this.setState({fullName: event.target.value})
        console.log(event.target.value);
    }
    handleEmail = (event) => {
        this.setState({email: event.target.value})
        console.log(event.target.value);
    }
    handleMobile = (event) => {
        this.setState({mobileNumber: event.target.value})
        console.log(event.target.value);
    }
    handleMessage = (event) => {
        this.setState({message: event.target.value})
        console.log(event.target.value);
    }*/
    handleChange = (event) => {
        this.setState({ [event.target.name] :event.target.value });
    }


    handleSubmit = (event) => {
        alert(JSON.stringify(this.state));
        event.preventDefault();
    }
    

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Full Name</label><br/>
                    <input type='text' name='fullName' value={this.state.fullName}
                            onChange={this.handleChange} /><br/>

                    <label>Email</label><br/>
                    <input type='email' name='email' value={this.state.email}
                            onChange={this.handleChange} /><br/>

                    <label>Mobile Number</label><br/>
                    <input type='number' name='mobileNumber' value={this.state.mobileNumber}
                            onChange={this.handleChange} /><br/>

                    <label>Message</label><br/>
                    <textarea name='message' value={this.state.message}
                                onChange={this.handleChange}/><br/>
                    
                    <input type='submit' value='send'/>
                </form>
            </div>
        )
    }
}
export default Form;