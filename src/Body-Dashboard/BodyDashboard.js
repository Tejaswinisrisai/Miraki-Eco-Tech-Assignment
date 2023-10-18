import React from "react";
import CollapsibleMenu from "../components/CollapsibleMenu/CollapsibleMenu";
import ChartsBoard from "../components/ChartsBoard/ChartsBoard";
import DashboardTable from "../components/DashboardTable/DashboardTable";

const DashboardBody = () => {
  return (
    <div className="d-flex flex-row" style={{ height: "85vh" }}>
      <div style={{ width: "12vw" }}>
        <CollapsibleMenu />
      </div>
      <div style={{ width: "88vw", padding: "1rem", overflowY: "scroll" }}>
        {/* <div style={{ width: "88vw", backgroundColor: "wheat", padding: "1rem" }}> */}
        <ChartsBoard />
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashboardBody;
