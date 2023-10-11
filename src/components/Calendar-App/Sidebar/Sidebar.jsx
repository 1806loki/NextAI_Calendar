// import { useNavigate } from "react-router-dom";

import logo from "../../../assets/NextAI_logo.png";

import "./Sidebar.css";

const Sidebar = () => {
  const handleGoogleLogin = () => {
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const googleAuthUrl =
      "https://accounts.google.com/o/oauth2/auth" +
      `?client_id=${CLIENT_ID}` +
      "&redirect_uri=http://localhost:5174/calendar/events" +
      "&scope=https://www.googleapis.com/auth/calendar.readonly" +
      "&response_type=code";
    window.location.href = googleAuthUrl;
  };

  return (
    <div className="sidebar">
      <div className="container">
        <div className="header">
          <img src={logo} alt="" />
          <h2>Calendar</h2>
        </div>
      </div>
      <div className="footer">
        <button onClick={handleGoogleLogin}>
          Connect With Google Calendar
        </button>
      </div>
    </div>
  );
};
export default Sidebar;
