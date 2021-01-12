import React from 'react'
import { Doughnut } from 'react-chartjs-2';

/*

This component returns the donut graph that shows the number of repositories
that contain issues and those that do not, using the props issues and noissues as data for this type of graph

*/

export default function Plot3({ issues, noissues }) {
    console.log(issues, noissues)
    const state = {
        labels: ['Issues', 'No issues'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                hoverBackgroundColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                data: [issues, noissues]
            }
        ]
    }
    return (
        <div>
            <Doughnut
                data={state}
                options={{
                    title: {
                        display: true,
                        text: 'Number of Issues and No Issues Over Repos',
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
    )
}
