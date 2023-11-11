import React,{useEffect, useState,useRef} from 'react'
import {useFormik} from 'formik'
import { updatDatabase } from '../helper/helper';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Creatable from 'react-select/creatable';
import { getNames } from '../helper/helper';
import 'react-toastify/dist/ReactToastify.css';

function Sale() {

  const [name,setName]=useState('')
  const [rackNo,setRackNo]=useState('')
  const [price,setPrice]=useState('')
  const [quantity,setQuantity]=useState('')
  const [options,setOptions]=useState([])
  const [amount,setAmount] = useState('')
  const [items,setItems]=useState([])

  let selectRef=useRef(null)

  const navigate=useNavigate()



  const handleBackend=async()=>{

    const msg=await updatDatabase(items)
    setTimeout(()=>navigate('/order'),2000)
    if(msg.status===201)
    {
      toast.success("Inventory Updated Sucessfully");
    }
    else 
    {
      toast.error('Error')
    }
    
  }

  const addItem=(values)=>{
    setItems((item)=>{
      return [...item,{...values}]
    })
  }

  useEffect(()=>{
    console.log('items=>',items);
  },[items])

  const formik=useFormik({
    initialValues: {
      medicineName:name,
      quantity:'',
    },
    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (values,{resetForm})=>{
      values.medicineName=name
      values.quantity=quantity
      addItem(values)
      setName('')
      setPrice('')
      setQuantity('')
      setRackNo('')
      resetForm('')
      selectRef.clearValue()
    }
  })

  const handleChange=(value)=>{
    if(value)
    setName(value.label)
  }

    useEffect(()=>{
        // console.log(options);
    },[options])

    const call=async()=>{
        const {data}=await getNames()
        setOptions(()=>{
            return data.list.map((item,index)=>{
                return {value:index+1,label:item.medicineName,rackNo:item.rackNo,price:item.price}
            })
        })
    }

    useEffect(()=>{
      for(let i=0;i<options.length;++i)
      {
        if(options[i].label===name)
        {
          console.log(options[i].label,i);
          setRackNo(options[i].rackNo)
          setPrice(options[i].price.cost)
          return;
        }
      }
    },[name])

    useEffect(()=>{
      call()
    },[])

    const hell=()=>{
      console.log('hell=>',items);
    }

  return (
    <div className='mx-auto md:h-[70vh] h-[95vh] bg-transparent-class mt-20 w-[70%]'>
      <ToastContainer position='top-center' reverseOrder={false} autoClose={2000} hideProgressBar={true}/>
      <form onSubmit={formik.handleSubmit}>
        <div className=' flex md:flex-row flex-col justify-around '>
          <div className='w-[50%] md:m-10 mt-3 mx-auto'>
            <label>Medicine Name</label>
            <Creatable className='custom-select' options={options} onChange={(value) => handleChange(value)} ref={ref => {
            selectRef = ref;
          }}  />
          </div>
          <div className='md:m-9 mt-3 p-2 flex flex-col'>
            <label>Quantity</label>
            <input onChange={(e)=>setQuantity(e.target.value)} value={quantity} type='number' className='mx-auto' placeholder='Quantity'/>
          </div>
          <div className='md:m-10 mt-3 h-5 p-2 flex flex-col'>
            <label>Rack No:-</label>
            <input type='number' className='mx-auto' onChange={(e)=>setRackNo(e.target.value)} readOnly value={rackNo}/>
          </div>
        </div>
        <div className='flex md:flex-row flex-col md:m-0 m-12 justify-around'>
          <div className='p-2 flex flex-col'>
            <label>Price Per Quantity</label>
            <input type='number' className='mx-auto' onChange={(e)=>setPrice(e.target.value)} readOnly value={price}/>
          </div>
          <div className='p-2 flex flex-col'>
              <label>Total Amount</label>
              <input readOnly className='mx-auto' placeholder='Amount' value={amount}/>
          </div>
        </div>
        <div className='flex flex-row justify-center md:gap-28 gap-12 m-10 p-2'>
          <button className='button-9 min-w-fit' type='submit' >
            Save and Add another Medicine 
          </button>
          <button className='button-9 min-w-fit' type='button' onClick={handleBackend}>
            Final Order
          </button>
        </div>
      </form>
    </div>
  )
}

export default Sale