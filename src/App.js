import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount = () => {
    fetch(`https://api.github.com/search/repositories?q=react`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ data: responseData.items });
      });
  };
  render() {
    const tableRows = this.state.data.map(item => (
      <tr key={item.full_name}>
        <td>{item.full_name}</td>
        <td>
          <a href={item.html_url}>{item.html_url}</a>
        </td>
      </tr>
    ));
    return (
      <div className="App">
        <h1>Repositories</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>URL</th>
            </tr>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
