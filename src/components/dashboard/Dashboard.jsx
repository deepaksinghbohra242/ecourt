import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "./Navbar";
import Table from "../common/Table";
import { Routes , Route} from "react-router-dom";
import Cases from "../pages/Cases";
import Hearings from "../pages/Hearings";
import Orders from "../pages/Orders";
import Advocate from "../pages/Advocate";
import AddCases from "../pages/AddCases";

function Dashboard() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <div className="w-full flex flex-col overflow-hidden">
        <Navbar />
        <div className="overflow-auto flex-1 p-4">
          <Routes>
            <Route path="" element={<Cases />} />
            <Route path="cases" element={<Cases />} />
            <Route path="hearings" element={<Hearings />} />
            <Route path="orders" element={<Orders />} />
            <Route path="advocate" element={<Advocate />} />
            <Route path="add" element={<AddCases />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
