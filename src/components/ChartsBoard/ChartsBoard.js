import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import "./ChartsBoard.css";
import DC from "../Charts/Donut";
import LC from "../Charts/Line";
import BC from "../Charts/Bar";

const ChartsBoard = () => {
  return (
    <div className="d-flex flex-row">
      <div className="chartDiv">
        <h6 className="chartTitle">Customer Interaction Distribution</h6>
        <DC />
      </div>
      <div className="chartDiv">
        <h6 className="chartTitle">Customer Acquisition by Channel</h6>
        <LC />
      </div>
      <div className="chartDiv">
        <h6 className="chartTitle">Solar Panel Sales</h6>
        <BC />
      </div>
    </div>

    // <div className="d-flex" style={{ height: "80%" }}>
    //   <div style={{ width: "70%" }} className="d-flex flex-column">
    //     <div style={{ height: "50%" }} className="mb-4 pb-4">
    //       <LC />
    //     </div>
    //     <div style={{ height: "50%" }} className="mt-4 pt-4">
    //       <BC />
    //     </div>
    //   </div>
    //   <div style={{ width: "30%" }}>
    //     <DC />
    //   </div>
    // </div>
  );
};

export default ChartsBoard;
