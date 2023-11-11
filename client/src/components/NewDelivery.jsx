import React,{useState} from 'react'
import NewSupply from './NewSupply';
import Vendor from './Vendor';
import {addToInventory} from '../helper/helper'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function NewDelivery() {

  const [items,setItems]=useState([]);
  const [vendor,setVendor]=useState({});

  const handleSubmit=async()=>{

    // let [arr,setArr]=useState([])

    const arr=items.map((item)=>{
      return {...item,vendor}
    })
    
    console.log(arr,items);
    const msg=await addToInventory(arr)
    if(msg.status===201)
    {
      toast.success("Inventory Updated Sucessfully");
    }
    else 
    {
      toast.error('Error')
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold headline'>New Supply</h1>
      <NewSupply items={items} setItems={setItems}/>
      <Vendor vendor={vendor} setVendor={setVendor} />
      <button className='mt-20 button-9 xs:text-base text-[5px]' onClick={handleSubmit}>Print Bill to Vendor</button>
    </div>
  )
}
export default NewDelivery