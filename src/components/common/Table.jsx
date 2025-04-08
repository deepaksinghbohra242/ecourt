import React from "react";
import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function Table({ columns, data }) {
  return (
    <>
      <div className="flex justify-end">
        <Link
          to="/dashboard/add"
          className="flex gap-2 items-center px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          <IoMdAdd />
          Add
        </Link>
      </div>

      <div className="relative overflow-x-auto overflow-y-auto max-h-screen scroll-auto shadow-xl border-0 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((col, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {col}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {Object.values(row).map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`px-6 py-4 ${!cell ? "text-gray-500" : "text-gray-700"}`}
                    >
                      {!cell ? "NULL" : cell}
                    </td>
                  ))}
                  <td className="px-6 py-4 flex items-center gap-4">
                    <button className="relative group text-blue-500 hover:text-blue-700">
                      <FiEye size={18} />
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white px-2 py-1 rounded-md">
                        View
                      </span>
                    </button>
                    <button className="relative group text-yellow-500 hover:text-yellow-700">
                      <FiEdit size={18} />
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white px-2 py-1 rounded-md">
                        Edit
                      </span>
                    </button>
                    <button className="relative group text-red-500 hover:text-red-700">
                      <FiTrash2 size={18} />
                      <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-1 opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white px-2 py-1 rounded-md">
                        Delete
                      </span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length + 1} className="px-6 py-4 text-center">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
