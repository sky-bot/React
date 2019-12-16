import React, { Component } from 'react';
import './App.css';
import Table from "./Components/Table/Table"
import "./Components/Table/Table.css"


class App extends Component {

  state = {
    inputText: "{}"
  }

  inputChangeHandler = (event) => {
    this.setState({ inputText: event.target.value })
  }

  render() {
    let items = []

    const result = JSON.parse(this.state.inputText)
    console.log("Working1")
    for (let key in result) {
      if (result.hasOwnProperty(key)) {
        items.push(<tr> <td className="cols">{key}</td> <td className="cols">{result[key]}</td> </tr>)
        console.log(key, result[key])
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>Assignment ZestIOT</h1>
        </header>
        <input type="text" onChange={this.inputChangeHandler} placeholder="Enter your Json"></input>
        <h3>{this.state.inputText}</h3>
        <Table rows={this.state.inputText} item={items}></Table>
        {/* <table className="table">
        <tbody>
        <tr className="row">
            <th>keys</th>
            <th>values</th>
          </tr>
            {items}
        </tbody>
          
        </table> */}
        
      </div>
    );
  }



}

export default App;
