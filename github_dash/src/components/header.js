import React from 'react';
import "../styles/header.css";

export default function HeaderDiv({ repos, following, followers, avatar }) {
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="ui statistic">
                            <div style={{ color: "white" }} class="value">{repos}</div>
                            <div style={{ color: "white" }} class="label">Repositories</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="ui statistic">
                            <div style={{ color: "white" }} class="value">{following}</div>
                            <div style={{ color: "white" }} class="label">following</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="ui statistic">
                            <div style={{ color: "white" }} class="value">{followers}</div>
                            <div style={{ color: "white" }} class="label">followers</div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="ui statistic">
                            <div style={{ color: "white" }} class="value">{avatar}</div>
                            <div style={{ color: "white" }} class="label">avatar</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
