import React from "react";
import "./dashboard.css";
import { assets } from "../assest/assest";

const Dashboard = (props) => {
  return (
    <>
      <div className="content">
        <h1 class="heading">Home</h1>
        <p className="heading1">Welcome {props.user}</p>
        <div className="row">
          <div class="container">
            <h3 className="heading">Project Progress</h3>
            <div class="progress">
              <table border={1}>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Progress</th>
                  <th>Status</th>
                  <th>Report File</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Collaboative Task Management system</td>
                  <td>Working on Frontend</td>
                  <td>On-Progress</td>
                  <td>View</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="col">
            <div className="TProject">
              <div>
                <h2>1</h2>
                <h4>Total Project</h4>
              </div>
              <div className="img1">
                <img src={assets.layer} alt=""></img>
              </div>
            </div>
            <div className="TTask">
              <div>
                <h2>6</h2>
                <h4>Total Task</h4>
              </div>
              <div className="img2">
                <img src={assets.planning} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
