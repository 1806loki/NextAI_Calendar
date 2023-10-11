import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import CalenderApp from "./components/Calendar-App/CalendarApp";
import Event from "./components/Event/Event";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/calendar" element={<CalenderApp />} />
          {/* <Route path="/calendar/events" element={<Event />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
