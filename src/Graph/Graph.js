import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

export default class Graph extends Component {
    state = {
        chartData: {
            labels: this.props.labels,
            datasets: [
                {
                    label: this.props.label2,
                    // 0, 4, 1, 8, 2, 2, 6, 3, 5, 5, 1, 9
                    data: [, , , , , 2, 6, 3, 5, 5, 1, 9],
                    backgroundColor: 'rgba(255, 99, 132, .5)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: true, 
                    pointRadius: 5,
                    pointBackgroundColor: 'rgb(255, 99, 132)'
                },
                {
                    label: this.props.label1,
                    data: [0, 4, 1, 8, 2, 2, , , , , , ],
                    backgroundColor: 'rgba(255, 99, 132, .5)',
                    borderColor: 'rgb(255, 99, 132)',
                    // fill: false,
                    borderDash: [20, 25],
                    borderDashOffset: 0,
                    pointRadius: 5,
                    pointBackgroundColor: 'rgb(255, 99, 132)'
                },
                // {
                //     // label: 'forecasts',
                //     // 0, 4, 1, 8, 3, 2, 9, 2, 3, 1, 6, 7
                //     data: [, , , , , 2, 9, 2, 3, 1, 6, 7],
                //     backgroundColor: 'rgba(119,192,26, .5)',
                //     borderColor: 'rgb(119,192,26)',
                //     fill: false,
                //     pointRadius: 5,
                //     pointBackgroundColor: 'rgb(119,192,26)'
                // },
                // {
                //     // label: 'actuals',
                //     data: [0, 4, 1, 8, 3, 2, , , , , , ],
                //     backgroundColor: 'rgba(119,192,26, .5)',
                //     borderColor: 'rgb(119,192,26)',
                //     // fill: false,
                //     borderDash: [20, 25],
                //     pointRadius: 5,
                //     pointBackgroundColor: 'rgb(119,192,26)'
                // }
            ]
        },
        fillOn: 'all',
        optionsTitleDisplay: true
    };

    onAdd = () => {
        let newState = {...this.state.chartData};
        newState.datasets[0].fill = !newState.datasets[0].fill
        newState.datasets.push(
            {
                label: 'forecasts2',
                // 0, 4, 1, 8, 3, 2, 9, 2, 3, 1, 6, 7
                data: [, , , , , 2, 9, 2, 3, 1, 6, 7],
                backgroundColor: 'rgba(119,192,26, .5)',
                borderColor: 'rgb(119,192,26)',
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgb(119,192,26)'
            },
            {
                label: 'actuals2',
                data: [0, 4, 1, 8, 3, 2, , , , , , ],
                backgroundColor: 'rgba(119,192,26, .5)',
                borderColor: 'rgb(119,192,26)',
                // fill: false,
                borderDash: [20, 25],
                pointRadius: 5,
                pointBackgroundColor: 'rgb(119,192,26)'
            }
        );
        this.setState({ chartData: newState, optionsTitleDisplay: false });
    };

    onFillToggle = () => {
        let newState = {...this.state.chartData};
        if (this.state.fillOn === 'all') {
            let fillToggle = newState.datasets.map(dataset => {
                dataset.fill = false
                return dataset;
            });
            newState.datasets = [...fillToggle];
            this.setState({ chartData: newState, fillOn: 'none' });
        }  else if (this.state.fillOn === 'none') {
            let fillToggle = newState.datasets.map((dataset, i) => {
                if (i % 2 !== 0) dataset.fill = true
                return dataset;
            });
            newState.datasets = [...fillToggle];
            this.setState({ chartData: newState, fillOn: 'left' })
        } else if (this.state.fillOn === 'left') {
            let fillToggle = newState.datasets.map((dataset, i) => {
                if (i % 2 === 0) dataset.fill = true
                else dataset.fill = false
                return dataset;
            });
            newState.datasets = [...fillToggle];
            this.setState({ chartData: newState, fillOn: 'right' })           
        } else {
            let fillToggle = newState.datasets.map(dataset => {
                dataset.fill = true
                return dataset;
            });
            newState.datasets = [...fillToggle];
            this.setState({ chartData: newState, fillOn: 'all' })  
        }
    };

    render() {

        console.log(this.props.title)
        return (
            <div>
                <Line
                    data={this.state.chartData}
                    options={{
                        // gets rid of label //////////////////////////////////
                        // maintainAspectRatio: false,
                        title: {
                            display: this.state.optionsTitleDisplay,
                            text: `EAC: ${this.props.title}`,
                            fontSize: 25
                        },
                        legend: {
                            display: false
                        },
                        tooltips: {
                            callbacks: {
                                label: function(tooltipItem) {
                                    return tooltipItem.yLabel;
                                }
                            },
                        },
                        // ^ gets rid of label /////////////////////////////////
                    }} />

                <button onClick={this.onAdd}>add EAC</button>
                <button onClick={this.onFillToggle}>Toggle Fill</button>
            </div>
        );
    }
}