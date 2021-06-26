import React from 'react'
import {Link, Redirect} from 'react-router-dom'

class Profile extends React.Component {
    constructor(props){
        super(props)        
        const token = localStorage.getItem("token")
        let loggedIn = true
        if(token == null){
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
       
    }
    render(){
        if(this.state.loggedIn === false){
            return <Redirect to="/login"/>
        }
       
    return (
        <div className="container jumotrun">
            <h1>this iS Raja profile</h1>
            <Link to='/login' onClick = {() => localStorage.removeItem("token")}>Logout</Link>
        </div>
    )
}
}

export default Profile
