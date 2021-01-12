import { Bar } from 'react-chartjs-2';


/*

In this component, the number of each programming language contained in each repository
of a user in github will be shown in a bar graph with the help of the chart.js module in react

the labels of this great plot are the keys  and values of my object filter previously in the app component
that are the parameters (props) to this component

*/

export default function Plot2({ keyss, values }) {
    console.log(keyss, values)
    const state = {
        labels: keyss,
        ticks: {
            min: 0
        },
        datasets: [
            {
                label: 'language',
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',

                ],
            }
        ]
    }
    return (
        <div>
            <Bar
                data={state}
                options={{
                    ticks: {
                        min: 0
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: true,
                                drawBorder: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: true,
                                drawBorder: false
                            }
                        }]
                    },
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Number of languages ​​over the total of repositories',
                        fontSize: 20,
                        fontFamily: "'PT Sans', sans-serif",
                        fontColor: "white",
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
