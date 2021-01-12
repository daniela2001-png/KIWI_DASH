import React from 'react'
import HeaderDiv from "./header"
import Plot1 from "./Plot1"
import Plot2 from "./Plot2"
import Plot3 from "./Plot3"

/*

This file render the dash where contains:

1) The welcome to a user of github
2) Call the component HeaderDiv (header.js)
3) and for last render the plots of the data of a user

Note: the funtion Dash take the props that are
inits in the main file App.js the props are mode (just read)
and also I added some styles inline to some divs

*/

export default function Dash({ issues, noissues, keyss, values, gists, name, followers, following, repos, avatar, username, location, type }) {
    return (
        <div>
            <div style={{ paddingLeft: "55px", paddingBottom: "90px", textAlign: "center" }} className="col">
                <div className="col-8">
                    <div className="container p-3 my-3 bg-dark text-white">
                        <h1 style={{ justifyContent: "flex-start" }}>Welcome <b>{name}</b></h1>
                    </div>
                </div>
            </div>
            <HeaderDiv gists={gists} type={type} location={location} followers={followers} following={following} repos={repos} avatar={avatar} />
            <br></br>
            <div style={{ backgroundColor: "#41484D" }} className="container p-3 my-3 border">
                <div className="row">
                    <div className="col">
                        <Plot3 issues={issues} noissues={noissues}></Plot3>
                    </div>
                    <div className="col">
                        <Plot1 username={username} repos={repos} followers={followers} following={following} ></Plot1>
                    </div>
                    <br></br>
                    <div className="w-100"><Plot2 keyss={keyss} values={values} ></Plot2></div>
                </div>
            </div>
        </div>
    )
}
