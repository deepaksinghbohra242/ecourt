import React from 'react'
import Table from '../common/Table'

function Orders() {
  const columnName = [
    "Id",
    "Case Id ",
    "Order Date",
    "Order Details",
    "Created Date"
  ]
  const columnData =[
    {
        id : "352644",
        case_id : "2346523",
        order_date : "t342654",
        order_details : "246347587",
        created_date : "2354564"

    }
  ]
  return (
    <>
      <div className="p-4">
        <Table columns={columnName} data={columnData} />
      </div>
    </>
  )
}

export default Orders
