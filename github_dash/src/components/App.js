import '../styles/App.css';
import { Form, Icon, Container } from 'semantic-ui-react'
import React, { useState } from "react";
import HeaderDiv from "./header"
import Plots from "./Plot1"
import Plot2 from "./Plot2"
import Plot3 from "./Plot3"
import Plot4 from "./Plot4"

function App() {

  // Here define my vars to show using states and init the state empty
  const [followers, setfollowers] = useState(22)
  const [following, setfollowing] = useState(12)
  const [repos, setrepos] = useState(2)
  const [gists, setgists] = useState()
  const [name, setname] = useState()
  const [location, setlocation] = useState()
  const [avatar, setavatar] = useState()

  return (
    <>
      <div className="App">
        <header className="app-header">
          <figure className="logo">
            <br></br>
            <h2>Welcome To Dashboard {name}!</h2>
          </figure>
          <br></br>
          <div>
            <Form>
              <Form.Group>
                <Form.Input maxLength="20" className="input-hi" placeholder='Search ...' icon={<Icon name='search' inverted circular link />} />
                {/* <Form.Button icon={<Icon name='search' inverted circular link />} content="Search" /> */}
              </Form.Group>
            </Form>
            <br></br>
            <HeaderDiv followers={followers} following={following} repos={repos} avatar={avatar} />
            <br></br>
            <div style={{ backgroundColor: "#41484D" }} class="container p-3 my-3 border">
              hii
            </div>
          </div>
        </header>
      </div >
    </>
  );
}

export default App;
