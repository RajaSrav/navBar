import React, { Component } from 'react';
import './org.css';
import {Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import raja from './images/i1.jpeg'

export class Navigation extends Component {
    // constructor(props){
    //     super(props)
    //     localStorage.removeItem("token")
    //     const token = localStorage.getItem("token")
    //     let loggedIn = true
    //     if(token == null){
    //         loggedIn = false
    //     }
    //     this.state = {
    //         loggedIn
    //     }
       
    
    // }
    render() {
        // let buttons;
        // if(this.state.loggedIn === true){
        //     buttons = (
        //         <Nav.Link><Link className="Link"  to='/login'>Logout</Link></Nav.Link>       
        //     )
        //     // console.log(this.state.loggedIn);
        // } else {
        //     buttons = (
        //         <Nav.Link ><Link className="Link" to='/login'>Login</Link></Nav.Link>
                                 
        //     )
            
        // }
        // console.log(this.state.loggedIn);
        
        return(
           
           <div >
              {/* https://www.youtube.com/watch?v=XWj18K4Uhg8 
              https://github.com/scalablescripts/react-auth/blob/main/src/components/Nav.tsx
              https://www.youtube.com/watch?v=OUP-urBy1k4*/}
               
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                     <Navbar.Brand to='/'><img width="30" height='30' className="rounded-circle" src={raja} alt="logo" /></Navbar.Brand> 
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link > <Link className="Link" to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link className="Link" to='/reg'>Sign Up</Link></Nav.Link>
                            <Nav.Link ><Link className="Link" to='/login'>Login</Link></Nav.Link>
                            {/* {buttons} */}

                            
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link><Link className="Link"  to='/login' onClick = {() => localStorage.removeItem("token")}>Logout</Link></Nav.Link>
                        <Nav.Link><Link className="Link" to='/Profile' >Profile</Link></Nav.Link>
                        </Navbar.Collapse>
                        </Navbar.Collapse>
                </Navbar>

                    
                
           </div> 
           
        )
    }
}

export default Navigation;
