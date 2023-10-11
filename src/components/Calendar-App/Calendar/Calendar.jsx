import { useState } from "react";
import "./Calendar.css";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendar = () => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const daysInMonth = getDaysInMonth(month, year);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const today = new Date().getDate(); // Get the current day

    let calendar = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<td key={j}></td>);
        } else if (dayCount <= daysInMonth) {
          // Check if it's today's date
          const isToday =
            dayCount === today &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear();
          week.push(
            <td key={j} className={isToday ? "today" : null}>
              {dayCount}
            </td>
          );
          dayCount++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
      if (dayCount > daysInMonth) break;
    }

    return calendar;
  };

  const handleMonthChange = (e) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), parseInt(e.target.value), 1)
    );
  };

  const handleYearChange = (e) => {
    setCurrentDate(
      new Date(parseInt(e.target.value), currentDate.getMonth(), 1)
    );
  };

  const formattedDate = () => {
    return new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      weekday: "short",
    });
  };

  return (
    <div className="calendar-container">
      <div className="calendar-main">
        <div className="calendar-title">{formattedDate()}</div>
        <div className="calendar-header">
          <div className="select-wrapper">
            <select
              value={currentDate.getFullYear()}
              onChange={handleYearChange}
            >
              {Array.from({ length: 100 }, (_, i) => i + 2000).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <select value={currentDate.getMonth()} onChange={handleMonthChange}>
              {Array.from({ length: 12 }, (_, i) => i).map((month) => (
                <option key={month} value={month}>
                  {new Date(0, month).toLocaleString(undefined, {
                    month: "long",
                  })}
                </option>
              ))}
            </select>
          </div>
          <button
            className="nav-button"
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() - 1,
                  1
                )
              )
            }
          >
            &lt;
          </button>
          <button
            className="nav-button"
            onClick={() =>
              setCurrentDate(
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth() + 1,
                  1
                )
              )
            }
          >
            &gt;
          </button>
        </div>
        <table className="calendar-table">
          <thead>
            <tr>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
