import React from "react";
import Table from "../common/Table";

function Hearings() {
  const columnName = [
    "Id",
    "Case Id",
    "Hearing Date",
    "Judge Name",
    "Rival Advocate Name",
    "Hearing Notes",
    "Created Date"
  ];
  const columnData = [
    {
      id: "235341",
      case_id: "@#%$^%$",
      hearing_date: "2437584426",
      judge_name: "23462457256",
      rival_advocate_name: "23464272547",
      hearing_notes: null,
      created_date : "2354564"

    },
    {
      id: "235341",
      case_id: "@#%$^%$",
      hearing_date: "2437584426",
      judge_name: "23462457256",
      rival_advocate_name: "23464272547",
      hearing_notes: "3426534245",
      created_date : ""

    },
    {
      id: "235341", 
      case_id: "@#%$^%$",
      hearing_date: "2437584426",
      judge_name: "23462457256",
      rival_advocate_name: "23464272547",
      hearing_notes: "3426534245",
      created_date : "2354564"
    },
  ];
  return (
    <>
      <div className="p-4">
        <Table columns={columnName} data={columnData} />
      </div>
    </>
  );
}

export default Hearings;
