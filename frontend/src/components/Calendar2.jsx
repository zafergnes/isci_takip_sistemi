var ReactDOM = require("react-dom");
var { Calendar, CalendarControls } = require("react-yearly-calendar");

function onDatePicked(date) {
  alert(date);
}

ReactDOM.render(
  <Calendar year={2018} onPickDate={onDatePicked} />,
  document.getElementById("calendar")
);

export default Calendar2
