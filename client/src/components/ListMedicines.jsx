import React,{useState,useEffect} from 'react'
import {getLowStockMed} from '../helper/helper'

function ListMedicines() {

    const [items,setItems]=useState([])

    const fun=async()=>{
      const {data:{list}}=await getLowStockMed()
      setItems(list)
    }

    useEffect(()=>{
      fun()
    },[])

  return (
    <div>
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header font-semibold">
                    <div className="col col-1">Medicine Name</div>
                    <div className="col col-2">Current Quantity</div>
                    <div className="col col-3">Threshold Quantity</div>
                    <div className="col col-4">Vendor Name</div>
                    <div className="col col-5">Vendor Number</div>
                    <div className="col col-6">Quanitity to be Order</div>
                </li>
                {
                    items.map((item,index)=>{
                        return (
                            <li key={index} className="table-rowi">
                                <div className="col col-1" data-label="Medicine Name">{item.medicineName}</div>
                                <div className="col col-2" data-label="Quantity">{item.quantity}</div>
                                <div className="col col-3" data-label="Price">{item.thresholdStock}</div>
                                <div className="col col-4" data-label="Vendor Name">{item.vendor.name}</div>
                                <div className="col col-5" data-label="Vendor Number">{item.vendor.number}</div>
                                <div className="col col-6" data-label="Quantity"><input className='boundary' placeholder='Quantity' type='number'/></div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default ListMedicines