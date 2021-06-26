import React, { Component } from "react";
import { Form, Button } from 'semantic-ui-react';
import jsonfile from'jsonfile';

var file = 'data.json'

var obj = {name: 'JP'}


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
}


handleChange = (e, {name, value}) => {
  this.setState({[name]: value})
}

sendDataSomewhere = function jsonfile(file){
jsonfile.writeFile(file, obj, function (err) {
  console.error(err);
});
};

  render() {
    return (
     <div>
      <Form onSubmit={this.sendDataSomewhere}>
        <Form.Field>
          <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit">Submit</Button>
       </Form>
     </div>
    );
  }
}











// import React, {useState} from 'react'
// import Axios from 'axios'
// var file = '../data.json'
// function Login() {
//     const u= file;
//     const [data,setData] = useState({
//         name:"",
//         date:""
//     })
//     // router.post('/', function(req, res) {
//     //     // do something w/ req.body or req.files 
//     // });

//     function submit(event){
//         event.preventDefault();
//         Axios.post("data.json",{
//             name: data.name,
//             date: data.date
//         })
//         .then(res => {
//             console.log(res.data);
//         })
//     }
//     function handle(event){
//         const newdata = {...data}
//         newdata[event.target.id] = event.target.value
//         setData(newdata)
//         console.log(newdata);
//     }
//     return (
//         <div>
//             <form onSubmit= {(event)=> submit(event)}>
//             <input onChange={(event) => handle(event)} id="name" value={data.name} placeholder="name" type="text"></input>
//             <input onChange={(event) => handle(event)} id="date" value={data.date} placeholder="password" type="date"></input>
//             <button type="submit">Click Me</button>
//             </form>
//         </div>
    
//     )
// }

// export default Login

// import React, { Component }  from 'react'; 
  
// class Login extends Component { 
  
//   state = { 
//     data: "This is data", 
//     num: 123, 
//     boolean: true, 
//   } 
  
//   // save data to localStorage 
//   saveStateToLocalStorage = () => { 
//     localStorage.setItem('state', JSON.stringify(this.state)); 
//   } 
  
//   // Fetch data from local storage 
//   getStateFromLocalStorage = () => { 
//     let data = localStorage.getItem('state'); 
//     if(data !== undefined) { 
//       this.setState(JSON.parse(data)); 
//     } 
//   } 
  
//   componentDidMount() { 
//     // Fetch data from local storage 
//     this.getStateFromLocalStorage(); 
//   } 
  
//   render() { 
//     return ( 
//       <div> 
//         <h2>GeeksforGeeks</h2> 
//         <button onClick={this.saveStateToLocalStorage}> 
//           Save State to local storage\ 
//         </button> 
//       </div> 
//     ); 
//   } 
// } 
  
// export default Login;