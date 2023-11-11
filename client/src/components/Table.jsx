import React from 'react'
import '../styles/table.css'
import {items} from '../assets/data'


function Table() {
  return (
    <div>
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header font-semibold">
                    <div className="col col-1">Medicine Name</div>
                    <div className="col col-2">Quantity</div>
                    <div className="col col-3">Price</div>
                    <div className="col col-4">Amount</div>
                </li>
                {
                    items.map((item,index)=>{
                        return (
                            <li key={index} className="table-rowi">
                                <div className="col col-1" data-label="Medicine Name">{item.medicineName}</div>
                                <div className="col col-2" data-label="Quantity">{item.quantity}</div>
                                <div className="col col-3" data-label="Price">{item.price}</div>
                                <div className="col col-4" data-label="Amount">{item.price*item.quantity}</div>
                            </li>
                        )
                    })
                }
                <li className="table-rowi flex flex-row justify-between">
                    <div className="col col-1 font-semibold">Total</div>
                    <div className="col col-4">{500}</div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Table