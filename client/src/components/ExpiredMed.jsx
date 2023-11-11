import React, {useState} from 'react'
import ListMedicinesExpired from './ListMedicinesExpired'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


function ExpiredMed() {
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
        <h1 className='text-3xl mt-0 font-bold headline'>Expired Medicines</h1>
        <ListMedicinesExpired/>
        <button onClick={handleSubmit} className='button-9'>Order Medicines</button>
    </div>
  )
}

export default ExpiredMed