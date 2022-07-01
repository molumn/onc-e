import React from "react";
import Menu from "../components/Menu";
import { MainTitle } from "../components/Title";
import Heading from "../container/Heading";
import MenuBar from "../container/MenuBar";

import './App.css';


export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Heading 
          front={
            <MainTitle title="Hello World" path="/"/>
          } 
          end={
            <MenuBar 
              element={
                <>
                  <Menu name="Home"   path="" />
                  <Menu name="Docs"   path="/docs" />
                  <Menu name="About"  path="/about" />
                </>
              }
            />
          }
        />
      </div>
    )
  }

}
