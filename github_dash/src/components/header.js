import React from 'react';
import "../styles/header.css";
import { Statistic, Icon, Image } from 'semantic-ui-react'

/*
This part of code contains the infomration basic about of username
like:
1) number of repos
2) number of  users following
3) number of users followers
4) the avatar of the user
5) the location of the user
6) and for last contains the type (if this is user or admin in github)

Note: In this file I added somes styles inlines for somes containers

*/

export default function HeaderDiv({ repos, following, followers, avatar, location, gists, type }) {
    return (
        <>
            <div style={{ backgroundColor: "#41484D" }} class="container p-3 my-3 border">
                <br></br>
                <div class="row">
                    <div class="col-sm-8">
                        <div className="container">
                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value>{repos}</Statistic.Value>
                                    <Statistic.Label>repositories</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{following}</Statistic.Value>
                                    <Statistic.Label>following</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>{followers}</Statistic.Value>
                                    <Statistic.Label>followers</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>
                        <br></br>
                        <div style={{ paddingBottom: "100px" }} className="container">
                            <Statistic.Group>
                                <Statistic>
                                    <Statistic.Value>0</Statistic.Value>
                                    <Statistic.Label>gists</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value text>
                                        <Icon name='user' />
                                        <br />
                                        {type}
                                    </Statistic.Value>
                                    <Statistic.Label>type</Statistic.Label>
                                </Statistic>
                                <Statistic>
                                    <Statistic.Value>
                                        <Icon name='home' />
                                    </Statistic.Value>
                                    <Statistic.Label>location {location}</Statistic.Label>
                                </Statistic>
                            </Statistic.Group>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <img src={avatar} class="ui medium circular image" />
                    </div>
                </div>
            </div>
        </>
    )
}
