import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard/*" element={<Dashboard />} />   
          <Route path="/" element={<Login />} />   
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
