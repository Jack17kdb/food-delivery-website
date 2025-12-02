import React from 'react'
import Navbar from '../components/Navbar'
import Order from '../components/Order'

const Cart = () => {
  return (
    <div className='min-h-screen bg-gray-300 py-4'>
        <Navbar />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 m-3 mt-22'>
            <div className='bg-white py-2 px-3 rounded-lg'>
                <p className='text-black font-bold text-2xl m-1'>Shopping Cart</p>
                <div className='w-full mt-2 h-1 rounded-full bg-gray-300 mx-auto'></div>
                <div className='flex items-center justify-around text-gray-900 mt-2 text-md'>
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Price</p>
                </div>
                <Order />
            </div>
        </div>
    </div>
  )
}

export default Cart