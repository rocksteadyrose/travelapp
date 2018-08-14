
import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.momentLocalizer(moment);

const Selectable = props => {
  const formattedTrips = props.trips.map((trip) => {
    return {
      ...trip,
      start: new Date(moment(trip.startDate)),
      end: new Date(moment(trip.endDate)),
      title: trip.city,
    }
  }
  )
  // console.log(formattedTrips)


  return < BigCalendar
    style={{height: 500}}
    selectable
    events={formattedTrips}
    defaultView="month"
    views={['month', 'week', 'day']}
    scrollToTime={new Date(1970, 1, 1, 6)}
    onSelectEvent={event => {
      props.history.push("/agenda/" + event._id) 
      // console.log(this.props.match.params.travelId)
    }}
    onSelectSlot={
      slotInfo =>
        alert(
          `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
          `\nend: ${slotInfo.end.toLocaleString()}` +
          `\naction: ${slotInfo.action}`
        )
    }
  />
}

export default Selectable