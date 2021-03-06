import '../styles/App.css';
import { Form, Icon } from 'semantic-ui-react'
import React, { useState, useEffect } from "react";
import Dash from "./dash"

/*

This file is the "main file" and your content is:

1) the first thing that I do is init the variables to use in the program with the help of useState()
2) And the next step is use useEffect that will be executed one time and get the data of the API
3) I created a arrow function that set each variable that I defined previously with useState()
4) create another arrow function that handle the event on the input user (to get the values of this)
5) Now in the handleSubmit() I do two things very important:
  5.1) I get data to other url of the API and handle the error that could happens in case of any failure
  5.2) I do another fetch to get the each repo of the user and extract the data that comes like a nested array
        So for me this was a little hard to do but to the end I managed to get the data as I wanted (objetos:object)

6) And for last step into this file was return the Form calling the method onsubmit to get the data of any user
  6.1) Ending I create a ternary within the return of the function that verifies if there is an error if so,
        show the message of the cause of the error but what we proceed is to render the Dash container
        with its assigned props to be able to pass them to other functions or components such as parameters


In addition I want to say that this little that I did was a great challenge for me.

*/

function App() {

  // Here define my vars to show using states and init the state empty
  const [followers, setfollowers] = useState()
  const [following, setfollowing] = useState()
  const [repos, setrepos] = useState()
  const [gists, setgists] = useState()
  const [name, setname] = useState()
  const [error, setError] = useState()
  const [username, setUsername] = useState()
  const [location, setlocation] = useState()
  const [InputUser, setInput] = useState()
  const [avatar, setavatar] = useState()
  const [type, settype] = useState()
  const [keyss, setkeys] = useState(["C", "Python", "JavaScript", "shell", "Arduino"]);
  const [values, setvalues] = useState([20, 10, 9, 8, 15])
  const [issues, setissues] = useState(40)
  const [noissues, setnoissues] = useState(100)



  // get the data of the api
  useEffect(() => {
    const api_url = "https://api.github.com/users"
    fetch(`${api_url}/daniela2001-png`, { headers: { Authorization: "3b565683a3e0cf03b13d92d039d52817085f965e" } })
      .then(resp => resp.json())
      .then(data => { SetData(data) })
  }, [])

  // here login is equal to the username of github
  const SetData = ({ name, login, following, followers, public_gists, public_repos, location, avatar_url, type }) => {
    setname(name)
    setUsername(login)
    setfollowers(followers)
    setfollowing(following)
    setrepos(public_repos)
    setlocation(location)
    setavatar(avatar_url)
    settype(type)
    setgists(public_gists)
  }

  // Here create a arrow function that sets the target value of the input user 
  const handleSearch = (e) => {
    setInput(e.target.value)
  }
  // Here sumbit the data that get of the result of the var InputUser
  const handleSubmit = () => {
    const api_url2 = `https://api.github.com/users/${InputUser}`
    fetch(`${api_url2}`, { headers: { Authorization: "3b565683a3e0cf03b13d92d039d52817085f965e" } })
      .then(resp => resp.json())
      .then(data => {
        if (data.message) {
          setError(data.message)
        }
        else {
          SetData(data)
          setError(null) // set the error to null so that it does not show again
        }
      })

    let objetos = {}
    let my_keys = []
    let my_values = []
    // objetos solo existe dentro de este fecth con la data que necesito pero si intento imprimirlo afure no existe o esta vacio
    fetch(`https://api.github.com/users/${InputUser}/repos`, { headers: { Authorization: "3b565683a3e0cf03b13d92d039d52817085f965e" } })
      .then(resp => resp.json())
      .then(data => {
        let data_fix = []
        let counter = 0;
        let counter_false = 0;
        for (let i = 0; i <= data.length - 1; i++) {
          if (data[i].language !== null) {
            data_fix.push(data[i].language)
          }
          if (data[i].has_issues === true) {
            counter += 1;
          }
          if (data[i].has_issues === false) {
            counter_false += 1
          }
        }
        const SetRepos = (my_keys, my_values, counter, counter_false) => {
          setkeys(my_keys)
          setvalues(my_values)
          setissues(counter)
          setnoissues(counter_false)
        }

        let set = new Set(data_fix);
        let counter1 = 0;
        set.forEach((item) => {
          counter1 = 0;
          data_fix.forEach((element) => {
            if (element.includes(item)) {
              counter1++
              objetos[item] = counter1;
            }
          })
          my_keys = Object.keys(objetos)
          my_values = Object.values(objetos)
        })
        // Here save the data of the repos into arrays using States
        SetRepos(my_keys, my_values, counter, counter_false)
      })
  }

  return (
    <>
      <div className="App">
        <header className="app-header">
          <figure className="logo">
            <br></br>
            <h2 style={{ paddingLeft: "20px" }}>Github Search <Icon style={{ paddingLeft: "20px" }} name="user"></Icon></h2>
          </figure>
          <br></br>
          <div>
            <div></div>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Input onChange={handleSearch} maxLength="20" className="input-hi" icon={<Form.Button icon={<Icon name='search' inverted circular link />} content="Search" />} />
              </Form.Group>
            </Form>
            <br></br>
            {error ? (<h1 style={{ textAlign: "center" }}>{error}</h1>) :
              (<Dash issues={issues} noissues={noissues} keyss={keyss} values={values} gists={gists} type={type} location={location} username={username} repos={repos} name={name} followers={followers} following={following} avatar={avatar} ></Dash>)}
          </div>
          <br></br>
        </header>
      </div >
    </>
  );
}

export default App;
