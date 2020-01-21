import React from "react";
import ReactDOM from "react-dom";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        code: "1234 **** **** **** ****",
        date: "10/24",
        name: "Tarek Bellalouna"
      };
  }
handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
}
  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          className="textArea"
          type="text"
          placeholder="123* **** **** ****"
          name="code"
        />
        <br />
        <input
          onChange={this.handleChange}
          className="textArea"
          type="text"
          placeholder="Name"
          name="name"
        />
        <br />
        <input
          onChange={this.handleChange}
          className="textArea"
          type="text"
          placeholder="MM/YY"
          name="date"
        />
      </div>
    );
  }
}

export default Form;
