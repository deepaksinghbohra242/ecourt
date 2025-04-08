import React from "react";
import Table from "../common/Table";

function Advocate() {
  const columnName = [
    "Id",
    "Name",
    "Phone Number",
    "Email",
    "Bar Council Number",
    "Created Date"
  ];
  const columnData = [
    {
      id: "wqe54q3",
      name: "Q3w5432",
      phone_number: "454235",
      email: "@#%$$#wer",
      bar_council_number: "%$!#@6654",
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

export default Advocate;
