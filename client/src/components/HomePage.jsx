import React from 'react'
import {data} from '../assets/data'
import {Link} from 'react-router-dom'


function HomePage() {

  return (
  <div className=' mt-[80px] mx-auto max-w-xl'>
        <h1 className='text-4xl bg-color-div font-bold'>Welcome, What you would like to do </h1>
        <div className='flex flex-row mt-4 gap-32 justify-center '>
        {
            data.map((item,index)=>{
                return (
                    <div key={index} className=' flex flex-col w-[300px] h-[50vh] justify-between'>
                        <div className='back '>
                            <p className={`text-black bg-color text-sm font-bold p-4 bg-color opacity-75 rounded-3xl`}>
                                {item.desc}
                            </p>
                        </div>
                        <button className={`hh button-9 opacity-100 h${index}`}>
                            <Link to={item.path}>{item.name}</Link>
                        </button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default HomePage