import React, { useEffect } from 'react'
import ListMedicines from './ListMedicines'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LowStockList() {

    let navigate = useNavigate()



    const handleSubmit=()=>{
      toast.success("Ordered Placed Sucessfully, Going to Home Page");
      setTimeout(()=>{
        navigate('/')
        },2000)
    }

  return (
    <div>
        <ToastContainer position='top-center' reverseOrder={false} autoClose={2000} hideProgressBar={true}/>
        <h1 className='text-3xl font-bold headline'>Medicines which have low Stock</h1>
        <ListMedicines/>
        <button className='button-9' onClick={handleSubmit}>Order Medicines</button>
    </div>
  )
}

export default LowStockList