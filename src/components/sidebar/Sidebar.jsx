import React, { useState } from "react";
import { IoBriefcaseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { PiFilesFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa6";
import { ImHammer2 } from "react-icons/im";

const Sidebar = () => {
  const menuItems = [
    { name: "Cases", path: "/dashboard/cases", icon: <PiFilesFill /> },
    { name: "Case Hearings", path: "/dashboard/hearings", icon: <IoBriefcaseSharp /> },
    { name: "Case Orders", path: "/dashboard/orders", icon: <ImHammer2 /> },
    { name: "Advocate", path: "/dashboard/advocate", icon: <FaUserGraduate /> },
  ];

  const location = useLocation();
  console.log(location)

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="py-4 px-3 bg-gray-100 h-screen rounded-r-2xl dark:bg-gray-800 shadow-md">
        <ul className="space-y-2">
          <li>
            <div className="flex items-center p-2 text-xl font-bold text-gray-700 dark:text-white">
              <span className="ml-3">Dashboard</span>
            </div>
          </li>

          {menuItems.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`flex items-center p-2 text-base font-medium rounded-lg transition-all
                    ${isActive ? 'bg-blue-200 text-blue-900' : 'text-gray-700 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700'}
                  `}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="ml-3 whitespace-nowrap">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;