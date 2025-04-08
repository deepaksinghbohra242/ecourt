import React from "react";
import Table from "../common/Table"; // Ensure the correct path

function Cases() {
  const columnName = [
    "Id",
    "Case Number",
    "Case Title",
    "Court Name",
    "Filing Date",
    "Upcoming Hearing Date",
    "Case Status",
    "Created Date"
  ];

  const columnData = [
    {
      id: "123456789",
      case_number: "ABCD1234",
      case_title: "Property Dispute",
      court_name: "High Court",
      filing_date: "05-01-2023",
      upcoming_hearing_date: "10-05-2023",
      case_status: "Ongoing",
      created_date: "1672356789",
    },
    {
      id: "987654321",
      case_number: "XYZ9876",
      case_title: "Contract Breach",
      court_name: "District Court",
      filing_date: "12-03-2023",
      upcoming_hearing_date: "22-06-2023",
      case_status: "Closed",
      created_date: "1684378923",
    },
    {
      id: "741852963",
      case_number: "MNP4567",
      case_title: "Tax Evasion",
      court_name: "Supreme Court",
      filing_date: "21-07-2022",
      upcoming_hearing_date: "30-09-2022",
      case_status: "Resolved",
      created_date: "1653456789",
    },
    {
      id: "369258147",
      case_number: "QWE8520",
      case_title: "Fraud Investigation",
      court_name: "Session Court",
      filing_date: "18-05-2023",
      upcoming_hearing_date: "02-08-2023",
      case_status: "Ongoing",
      created_date: "1694579821",
    },
    {
      id: "852741963",
      case_number: "LKJ7412",
      case_title: "Divorce Case",
      court_name: "Family Court",
      filing_date: "03-02-2023",
      upcoming_hearing_date: "12-06-2023",
      case_status: "Pending",
      created_date: "1679823456",
    },
    {
      id: "159753486",
      case_number: "GHJ9632",
      case_title: "Cybercrime",
      court_name: "Cyber Court",
      filing_date: "11-11-2022",
      upcoming_hearing_date: "28-12-2022",
      case_status: "Resolved",
      created_date: "1648952376",
    },
    {
      id: "264891357",
      case_number: "UIO7539",
      case_title: "Corporate Dispute",
      court_name: "Commercial Court",
      filing_date: "19-08-2023",
      upcoming_hearing_date: "05-10-2023",
      case_status: "Active",
      created_date: "1701234567",
    },
    {
      id: "753951852",
      case_number: "ZXC2345",
      case_title: "Personal Injury",
      court_name: "Civil Court",
      filing_date: "07-06-2023",
      upcoming_hearing_date: "15-09-2023",
      case_status: "Ongoing",
      created_date: "1687349823",
    },
    {
      id: "689745123",
      case_number: "RTY7894",
      case_title: "Employment Dispute",
      court_name: "Labour Court",
      filing_date: "25-04-2023",
      upcoming_hearing_date: "14-07-2023",
      case_status: "Pending",
      created_date: "1678432156",
    },
    {
      id: "951357468",
      case_number: "VBN4562",
      case_title: "Consumer Rights",
      court_name: "Consumer Court",
      filing_date: "09-09-2023",
      upcoming_hearing_date: "20-11-2023",
      case_status: "Open",
      created_date: "1702348765",
    }
  ];
  

  return (
    <div className="p-4">
      <Table columns={columnName} data={columnData} />
    </div>
  );
}

export default Cases;
