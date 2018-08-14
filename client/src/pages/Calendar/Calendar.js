import React, { Component } from 'react';
import API from "../../utils/API";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Selectable from '../../components/Calendar'


class Calendar extends Component {
  state = {
    trips: []
  };

componentDidMount() {
  this.loadTravel();
}

loadTravel = () => {
  API.findAllTravel(this.props.match.params.userId)
    .then(res => {
      console.log(res)
      // console.log(config)
      this.setState({ trips: res.data[0]})
    })
    // console.log(this.props.match.params.userId)
    console.log(this.state.trips)
    

}


render() {

  return (
    <div className="app">
      <div className="jumbotron">
        <div className="container">
          <h1>
            Your Trips <i className="fa fa-calendar" />
          </h1>
          <p>Get Stylin'!</p>
        </div>
      </div>
      <Selectable trips={this.state.trips}
      history={this.props.history} />
    </div>
  )
}
}

export default Calendar;

// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import Selectable from '../../components/Calendar'

// const EXAMPLES = {
//   selectable: 'Create events',
// }

// class Calendar extends Component {
//   constructor(...args) {
//     super(...args)

//     const hash = (window.location.hash || '').slice(1)

//     this.state = {
//       selected: EXAMPLES[hash] ? hash : 'basic',
//     }
//   }

//   select = selected => {
//     this.setState({ selected })
//   }
//   render() {
//     let selected = this.state.selected
//     let Current = {
//       selectable: Selectable,
//     }[selected]

//     return (
//       <div className="app">
//         <div className="jumbotron">
//           <div className="container">
//             <h1>
//               Your Trips <i className="fa fa-calendar" />
//             </h1>
//             <p>Get Stylin'!</p>
//           </div>
//         </div>
//         <Selectable/>
//       </div>
//     )
//   }
// }
// export default Calendar;