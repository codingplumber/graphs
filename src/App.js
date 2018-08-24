import React, { Component } from 'react';
import './App.css';
import Graph from './Graph/Graph';

// 0, 4, 1, 8, 2, 2, 6, 3, 5, 5, 1, 9
// 0, 4, 1, 8, 3, 2, 9, 2, 3, 1, 6, 7
class App extends Component {
  state = {
    // 0, 4, 1, 8, 2, 2, 6, 3, 5, 5, 1, 9
    // actuals: [
    //   ['Jan', 0],
    //   ['Feb', 4],
    //   ['Mar', 1],
    //   ['Apr', 8],
    //   ['May', 2],
    //   ['Jun', 2]
    // ],
    // forecasts: [
    //   ['Jun', 2],
    //   ['Jul', 6],
    //   ['Aug', 3],
    //   ['Sep', 5],
    //   ['Oct', 5],
    //   ['Nov', 1],
    //   ['Dec', 9]
    // ],
    accounts: [
      {
        name: 'XXXXXX',
        actuals: [
          ['Jan', 0],
          ['Feb', 4],
          ['Mar', 1],
          ['Apr', 8],
          ['May', 2],
          ['Jun', 2]
        ],
        forecasts: [
          ['Jun', 2],
          ['Jul', 6],
          ['Aug', 3],
          ['Sep', 5],
          ['Oct', 5],
          ['Nov', 1],
          ['Dec', 9]
        ],
      },
      {
        // 0, 4, 1, 8, 3, 2, 9, 2, 3, 1, 6, 7
        name: 'YYYYYY',
        actuals: [
          ['Jan', 0],
          ['Feb', 4],
          ['Mar', 1],
          ['Apr', 8],
          ['May', 3],
          ['Jun', 2]
        ],
        forecasts: [
          ['Jun', 2],
          ['Jul', 9],
          ['Aug', 2],
          ['Sep', 3],
          ['Oct', 1],
          ['Nov', 6],
          ['Dec', 7]
        ],
      }
    ]

    // labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  };

  // state = {
  //   accounts: [
  //     {
  //       name: 'XXXXXX',
  //       actuals: [
  //         ['time', 'value'],
  //         ['time', 'value'],
  //         ['time', 'value'],
  //       ],
  //       forecasts: [
  //         ['time', 'value'],
  //         ['time', 'value'],
  //         ['time', 'value'],
  //       ],
  //     },
  //     {
  //       name: 'YYYYYYYY',
  //       actuals: [
  //         ['time', 'value'],
  //         ['time', 'value'],
  //         ['time', 'value'],
  //       ],
  //       forecasts: [
  //         ['time', 'value'],
  //         ['time', 'value'],
  //         ['time', 'value'],
  //       ],
  //     }
  //   ]
  // };

  render() {
    let newState = {...this.state.accounts};
    const actuals = newState[0].actuals.slice(0, newState[0].actuals.length -1);
    const eac = [...actuals, ...newState[0].forecasts];

    const actualsData = newState[0].actuals.map(data => data[1])

    console.log('[eac]: ',eac)
    const xAxis = eac.map(time => {
      return time[0]
    })

    const title = this.state.accounts[0].name;

    // console.log(xAxis)

    return (
      <div className="App">
        <Graph labels={xAxis} title={title} label1={`${this.state.accounts[0].name} actuals`} label2={`${this.state.accounts[0].name} forecasts`} />
      </div>
    );
  }
}

export default App;
