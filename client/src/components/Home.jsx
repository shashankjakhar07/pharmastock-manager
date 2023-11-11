import React from 'react'
import {createBrowserRouter, RouterProvider, Link} from 'react-router-dom'
import HomePage from './HomePage'
import Sale from './Sale'
import NewDelivery from './NewDelivery'
import Order from './Order'
import LowStockList from './LowStockList'
import ExpiredMed from './ExpiredMed'

const router=createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: '/sale',
        element: <Sale/>
    },
    {
        path: '/newDelivery',
        element: <NewDelivery/>
    },
    {
        path: '/order',
        element: <Order/>
    },
    {
        path: '/generateMed/lowStock',
        element: <LowStockList/>
    },
    {
        path: '/generateMed/expiredMed',
        element: <ExpiredMed/>
    }
])
  
function Home() {
    return (
        <div className='w-auto h-[100vh] '>
            <main>
                <RouterProvider router={router} />
            </main>
        </div>
    )
  }

export default Home

