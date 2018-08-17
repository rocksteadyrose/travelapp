import React, { Component } from 'react';
import API from "../../utils/API";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Selectable from '../../components/Calendar'
import EditorFormatUnderlined from 'material-ui/SvgIcon';
import "./Calendar.css";


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
      this.setState({ trips: res.data })
    })
    console.log(this.state.trips)
}


render() {

  return (
    <div className="app">
      <div className="jumbotron">
        <div className="container">
          <img className="imgCalendar" src="/images/tripsorange.png" alt="trips"/>   
          {/* <h1 className="maintagline">
            Your Trips <i className="fa fa-calendar" />
          </h1>
          <br />
          <br />
          <br />
          <p className="secondtagline">Get Stylin'!</p> */}
        </div>
      </div>
      <Selectable trips={this.state.trips}
      history={this.props.history} />
    </div>
  )
}
}

export default Calendar;