import {useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const[logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get("http://backend:3060/api/v1/logs")
    .then(res => setLogs(res.data))
    .catch(err => console.error("Error fetching logs:", err))
  }, [])

  return (
    <div className="container">
      <h2>Server Logs</h2>
      <table className="logs-table">
        <thead>
          <tr>
            <th>TimeStamp</th>
            <th>Host</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.TimeStamp}</td>
              <td>{log.Host}</td>
              <td className={log.Status === "Online" ? "online" : "offline"}>
                {log.Status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;