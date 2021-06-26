import React, { Component } from 'react'

export class addition extends Component {
  constructor(){
    super();
    this.state={
      num1:'',
      num2:'',
      total:''
    }
  }
  handlle1 = (event) => {
    this.setState({num1:event.target.value})
  }
  handlle2 = (event) => {
    this.setState({num2:event.target.value})
  }
  click = (event) => {
    // console.log(event.target.name == "+");
    if(event.target.name == "+"){
      this.setState({      
        total:parseInt(this.state.num1)+parseInt(this.state.num2)
    })
    }
    else if (event.target.name == "-") {
      this.setState({      
        total:parseInt(this.state.num1)-parseInt(this.state.num2)
    })
    }
    else if (event.target.name == "*") {
      this.setState({      
        total:parseInt(this.state.num1)*parseInt(this.state.num2)
    })
    }
    else if (event.target.name == "/") {
      this.setState({      
        total:parseInt(this.state.num1)/parseInt(this.state.num2)
    })
    }
    
  }
  render() {
    return (
      <div className="main">
        <div className="container">
        <form>
          <input type="text" value={this.state.num1} onChange={this.handlle1}/>
          <input type="text" value={this.state.num2} onChange={this.handlle2}/>
        </form>
        
        <div className="buttons">
        <button name="+" type="submit" onClick={this.click}>+</button>
        <button name="-" type="submit" onClick={this.click}>&ndash;</button>
        <button name="*" type="submit" onClick={this.click}>&times;</button>
        <button name="/" type="submit" onClick={this.click}>&divide;</button>
        </div>
        <h1>{this.state.total}</h1>
        </div>
        
        
        
      </div>
    )
  }
}

export default addition;
