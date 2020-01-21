import React from "react";
import ReactDOM from "react-dom";
import Card from "./card";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: "1234 **** **** **** ****",
      date: "",
      name: "Tarek Bellalouna"
    };
  }
  handleChange = e => {

    

    this.setState({
      [e.target.name]: e.target.value
        
    });
  };
  render() {
    return (
      <div className="App">
        <Card
          code={this.state.code}
          name={this.state.name}
          date={this.state.date}
        />

        <div className="form">
          <input
            onChange={this.handleChange}
            className="textArea"
            type="text"
            placeholder="123* **** **** ****"
            name="code"
            maxLength={16}
          />
          <br />
          <input
            onChange={this.handleChange}
            className="textArea"
            type="text"
            placeholder="Name"
            name="name"
            maxLength={20}
          />
          <br />
          <input
            onChange={this.handleChange}
            className="textArea"
            type="text"
            placeholder="MM/YY"
            name="date"
            maxLength={4}
          />
        </div>
      </div>
    );
  }
}

export default App;
