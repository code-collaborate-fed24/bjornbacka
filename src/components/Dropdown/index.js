import React from "react";
import ReactDOM from "react-dom";

let nombres = ["Leadership Labs", "Dragmon", "Guilmon", "Voz Rasposa", "Omar"];

export default class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Leadership Labs" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const newName = e.target.value;
    this.setState({ name: newName });
  }
  render() {
    return (
      <div>
        <h1>Content; {this.state.name}</h1>
        <select onChange={this.handleChange}>
          {nombres.map((n) => (
            <option value={n}>{n}</option>
          ))}
        </select>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<DropDown />, rootElement);
