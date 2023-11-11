import React,{useState,useRef,useEffect} from 'react'
import {useFormik} from 'formik'
import '../styles/button.css'
import '../styles/table.css'
import Creatable from 'react-select/creatable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getNames} from '../helper/helper'


    //    "medicineName":"dolo",
    //   "quantity": 10,
    //   "price":{
    //     "costPrice":10,
    //     "sellingPrice":15
    //   },
    //   "rackNo":4,
    //   "expiryDate":07122001,
    //   "thresholdStock":6,
    //   "vendor":{
    //     "vendorName":"Kush",
    //     "VendorNumber":"12345"
    //   }





function NewSupply({items,setItems}) {

    const [options,setOptions]=useState([]);
    const [name,setName]=useState('')
    const [rackNo,setRackNo]=useState('')
    const [amount,setAmount]=useState('')
    const [totalAmount,setTotalAmount]=useState(0)
    const [quantity,setQuantity]=useState('')
    const [price,setPrice]=useState('')

    let selectRef=useRef(null)


    const validation=(values)=>{
        console.log(values);
        if(values.price.selling&&values.expiryDate)
        {
            const errors={}
            return errors
        }
        const errors=toast.error('Insert Values')
        return errors
    }

      const formik=useFormik({

        initialValues: {
            medicineName:name,
            quantity:'',
            price:{
                cost:'',
                selling:''
            },
            expiryDate:'',
            rackNo:'',
            amount:''
        },

        // validate: validation,
        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: async (values,{resetForm})=>{
            console.log(values,items);
            values.medicineName=name
            values.rackNo=rackNo
            values.quantity=quantity
            values.price.cost=price
            values.amount=amount
            setItems((item)=>{
                return [...item,values]
            })
            
            setTotalAmount((am)=>{
                console.log(am);
                return am+values.quantity*values.price.cost
            })
            setName('')
            setRackNo('')
            setQuantity('')
            setPrice('')
            setAmount('')
            resetForm()
            selectRef.clearValue()
        }


    })

    const handleChange=(value)=>{
        if(value)
        setName(value.label)
    }

    useEffect(()=>{
        console.log(options);
    },[options])

    const call=async()=>{
        const {data}=await getNames()
        setOptions(()=>{
            return data.list.map((item,index)=>{
                return {value:index+1,label:item.medicineName,rackNo:item.rackNo}
            })
        })
    }

    useEffect(()=>{
        for(let i=0;i<options.length;++i)
        {
            if(options[i].label===name)
            {
                setRackNo(options[i].rackNo)
                return;
            }
        }
    },[name])

    useEffect(()=>{
        setAmount(price*quantity)
    },[quantity,price])

    useEffect(()=>{
        console.log('total Amount=>',totalAmount);
    },[totalAmount])

    useEffect(()=>{
        call()
    },[])

  return (
    <div>
        <ToastContainer position='top-center' reverseOrder={false} autoClose={2000} hideProgressBar={true}/>
        <div className="container">
            <ul className="responsive-table">
                <li className="table-header font-semibold">
                    <div className="col col-1">Medicine Name</div>
                    <div className="col col-2">Quantity</div>
                    <div className="col col-3">Cost Price</div>
                    <div className="col col-4">Selling Price</div>
                    <div className="col col-5">Expiry date</div>
                    <div className="col col-6">Rack No</div>
                    <div className="col col-7">Amount</div>
                </li>
                {
                    items.map((item,index)=>{
                        return (
                                <li key={index} className="table-rowi">
                                    <div className="col col-1" data-label="Medicine Name">
                                        <div className='w-[100%] max-w-[100px]  mx-auto'>
                                            <input className='boundary outline-none border' value={item.medicineName} readOnly type='text'/>
                                        </div>
                                    </div>
                                    <div className="col col-2" data-label="Quantity"><input className='boundary' readOnly value={item.quantity} placeholder='Quantity' type='number'/></div>
                                    <div className="col col-3" data-label="Cost Price"><input className='boundary' readOnly value={item.price.cost} placeholder='Cost Price' type='number'/></div>
                                    <div className="col col-4" data-label="Selling Price"><input className='boundary' readOnly value={item.price.selling} placeholder='Sell Price'  type='number'/></div>
                                    <div className="col col-5 " data-label="Expiry Date"><input className='date md:w-[120px] text-center w-[100px]' readOnly value={item.expiryDate} placeholder='Expiry Date'  type='date'/></div>
                                    <div className="col col-6" data-label="Rack No"><input className='boundary' readOnly value={item.rackNo} placeholder='Rack No'  type='number'/></div>
                                    <div className="col col-7" data-label="Amount"><input className='boundary' readOnly value={item.amount} placeholder='Amount' type='number'/></div>
                                </li>
                        )
                    })
                }
                <form onSubmit={formik.handleSubmit}>
                <li className="table-rowi">
                        <div className="col col-1" data-label="Medicine Name">
                            <div className='w-[100%] max-w-[100px]  mx-auto'>
                            <Creatable className='custom-select -mt-1' options={options} onChange={(value) => handleChange(value)} ref={ref => {
                                selectRef = ref;
                                }}
                            />
                            </div>
                        </div>
                        <div className="col col-2" data-label="Quantity"><input onChange={(e)=>setQuantity(e.target.value)} value={quantity} className='boundary  ' placeholder='Quantity' type='number'/></div>
                        <div className="col col-3" data-label="Cost Price"><input className='boundary ' onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Cost Price'  type='number'/></div>
                        <div className="col col-4" data-label="Selling Price"><input className='boundary ' placeholder='Sell Price' {...formik.getFieldProps('price.selling')} type='number'/></div>
                        <div className="col col-5" data-label="Expiry Date"><input className='boundary ' placeholder='Expiry Date' {...formik.getFieldProps('expiryDate')} type='date'/></div>
                        <div className="col col-6" data-label="Rack No"><input className='boundary ' placeholder='Rack No' onChange={(e)=>setRackNo(e.target.value)} value={rackNo} type='number'/></div>
                        <div className="col col-7" data-label="Amount"><input className='boundary'  placeholder='Amount' readOnly value={amount} type='number'/></div>
                </li>
                <li className="table-rowi flex flex-row justify-between">
                    <div className="col col-1 font-semibold">Total</div>
                    <div className="col col-7"><input type='number' className='boundary' value={totalAmount} readOnly /></div>
                </li>
                <div className='flex'>
                    <button className="button-82-pushable" type='submit' role="button"><span className="button-82-shadow"></span><span className="button-82-edge"></span><span className="button-82-front text"><img src='./addIcon.png' alt='add icon'></img> </span></button>
                </div>
                </form>
            </ul>
        </div>
    </div>
  )
}

export default NewSupply