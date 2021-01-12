import React from 'react';
import "../styles/header.css";
import { Statistic, Icon } from 'semantic-ui-react'

/*
This part of code contains the infomration basic about of username like:

1) number of repos
2) number of  users following
3) number of users followers
4) the avatar of the user
5) the location of the user
6) and for last contains the type (if this is user or admin in github)

Note: In this file I added somes styles inlines for somes containers

*/

export default function HeaderDiv({ gists, repos, following, followers, avatar, location, type }) {
    return (
        <>
            <div style={{ backgroundColor: "#41484D" }} className="container p-3 my-3 border">
                <br></br>
                <div className="row">
                    <div className="col-sm-8">
                        <div className="container">
                            <Statistic.Group>
                                <Statistic color='olive' inverted>
                                    <Statistic.Value>{repos}</Statistic.Value>
                                    <Statistic.Label>repositories</Statistic.Label>
                                </Statistic>
                                <Statistic color='teal' inverted>
                                    <Statistic.Value>{following}</Statistic.Value>
                                    <Statistic.Label>following</Statistic.Label>
                                </Statistic>
                                <Statistic color='blue' inverted>
                                    <Statistic.Value>{followers}</Statistic.Value>
                                    <Statistic.Label>followers</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>
                        <br></br>
                        <div style={{ paddingBottom: "100px" }} className="container">
                            <Statistic.Group>
                                <Statistic color='brown' inverted>
                                    <Statistic.Value>{gists}</Statistic.Value>
                                    <Statistic.Label>gists</Statistic.Label>
                                </Statistic>
                                <Statistic color='red' inverted>
                                    <Statistic.Value text>
                                        <Icon name='user' />
                                        <br />
                                        {type}
                                    </Statistic.Value>
                                    <Statistic.Label>type</Statistic.Label>
                                </Statistic>
                                <Statistic inverted>
                                    <Statistic.Value>
                                        <Icon name='home' />
                                    </Statistic.Value>
                                    <Statistic.Label>location {location}</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <img alt="avatar-user-github" src={avatar} className="ui medium circular image" />
                    </div>
                </div>
            </div>
        </>
    )
}
