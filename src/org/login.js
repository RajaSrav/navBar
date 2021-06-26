import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            username:'',
            password:'',
            loggedIn
        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }
    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    submitForm(e){
        e.preventDefault()
        const {username, password} = this.state
        if (username === "raja" && password === "1234"){
            localStorage.setItem("token","hai")
            this.setState({
                loggedIn:true
            })
            console.log(this.state.username);
        }
    }
        render(){
            
            
           if(this.state.loggedIn){
               return <Redirect to="/profile"/>
           }
        return (
            
                <div className="shadow-lg p-3 width mx-auto bg-body border border-2 rounded-3 mt-5">
                <form onSubmit={this.submitForm}>
                <h3 className="text-center p-1 text-white bg-primary">Register</h3>

                
                <div className="form-group">
                    <label>User Name</label>
                    <input  type="text" className="form-control" placeholder="Enter User Name" name='username' value={this.state.username} onChange={this.onChange} />
                </div> 
            
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={this.state.password} onChange={this.onChange} />
                </div>

                <button type="submit" className="btn btn-dark mt-3 btn-lg btn-block">Login</button>
                <p className="text-end">
                    Already registered  <Link to='/reg'>Sign Up</Link>
                </p>
            </form>
            </div>
            
        )
    }
    }

export default Login;
