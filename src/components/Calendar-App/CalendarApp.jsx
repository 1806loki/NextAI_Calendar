import "./CalendarApp.css"
import Calendar from "./Calendar/Calendar";
import Sidebar from "./Sidebar/Sidebar";

const CalenderApp = () => {
  return (
    <div className="calendarApp">
      <Sidebar />
      <Calendar />
    </div>
  );
};

export default CalenderApp;
