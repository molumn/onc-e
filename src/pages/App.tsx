import { Component } from "react";
import Menu from "../components/Menu";


class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <div className="Internal App">
          <Menu name="Home" path="/"/>
          <Menu name="Docs" path="/docs"/>
        </div>
      </div>
    )
  }

}

export default App;
