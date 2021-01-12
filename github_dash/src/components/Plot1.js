import React from 'react'
import { Pie } from 'react-chartjs-2';


/*

In this visualization component I show the graph corresponding to the basic data of a user using the PieChart graph type with the help of the react chart module.js


On the other hand, the data plotted in this graph is the props passed as a parameter, which are:

1) The number of followers of a user
2) The number of people who follow the searched user
3) The number of gists the user has
4) And finally it also shows the number of public repositories that the user currently owns


*/

export default function Plots({ repos, followers, following, gists }) {
    const state = {
        labels: ['repositories public', 'followers', 'following',
            'gists'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#00A6B4',
                    '#660198',
                    '#2FDE00',
                    '#FFFF33',
                    '#00000'
                ],
                hoverBackgroundColor: [
                    '#A9CCE3',
                    '#DDA0DD',
                    '#175000',
                    '#003350',
                    '#DDA0DD'
                ],
                data: [repos, following, followers, gists]
            }
        ]
    }
    return (
        <div>
            <Pie
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Public Information',
                        fontSize: 20,
                        fontColor: "white"

                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        </div>
    );
}
