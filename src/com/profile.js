import React from 'react';


class Addition extends React.Component {
  constructor(){
    super();
    this.state={
      num1:'',
      num2:'',
      total:''
    }
  }
  handlenum1 = (event) => {
    this.setState({
      num1:event.target.value
    })
  }
  handlenum2 = (event) => {
    this.setState({
      num2:event.target.value
    })
  }
  exe = (event) => {
    this.setState({total:parseInt(this.state.num1)+parseInt(this.state.num2)});
    // event.prevent.default();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.exe}>
          <input type="text" value={this.state.num1} onChange={this.handlenum1}/>
          <input type="text" value={this.state.num2} onChange={this.handlenum2}/>
          <button type="submit" >+</button>
        </form>
        {this.state.total}
      </div>
    );
  }
}

export default Addition;