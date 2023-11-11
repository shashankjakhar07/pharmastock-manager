import React, { useEffect, useState } from 'react'

function Vendor({vendor,setVendor}) {

  const [name,setName]=useState('')
  const [number,setNumber]=useState('')

  useEffect(()=>{
    setVendor((vendor)=>{
      vendor.name=name;
      vendor.number=number;
      return vendor 
    })
  },[name,number])

  return (
    <div className='flex flex-row md:gap-14 gap-4  justify-center'>
        <input type='text' className='xs:h-[50px] h-[30px] xs:w-[100%] w-[50px] xs:text-base text-[5px]' onChange={(e)=>setName(e.target.value)} value={name} placeholder="Vendor's Name"></input>
        <input type='number' className='xs:h-[50px] h-[30px] xs:w-[100%] w-[50px] xs:text-base text-[5px]' onChange={(e)=>setNumber(e.target.value)} value={number} placeholder="Vendor's Number"></input>
    </div>
  )
}

export default Vendor