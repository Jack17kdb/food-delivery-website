import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import Order from '../components/Order.jsx'
import { useCartStore } from '../store/cartStore.js'

const Cart = () => {
  const { cartItems, getCartItems } = useCartStore();

  useEffect(() => {
    getCartItems();
  }, [getCartItems]);

  const total = cartItems ? cartItems.reduce((acc, item) => {
    return acc += (item.foodId?.cost * item.quantity);
  }, 0) : 0;

  return (
    <div className='min-h-screen bg-gray-200 pt-28 pb-10'>
        <Navbar />
        
        <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8'>
            
            <div className='lg:col-span-2 bg-white p-6 rounded-xl shadow-sm h-fit'>
                <p className='text-black font-bold text-2xl mb-2'>Shopping Cart</p>
                <div className='w-full h-1 rounded-full bg-gray-200'></div>
                
                <div className='grid grid-cols-3 text-gray-500 mt-4 mb-2 text-sm font-medium uppercase tracking-wider px-2'>
                    <p className='text-left'>Product</p>
                    <p className='text-center'>Quantity</p>
                    <p className='text-right'>Price</p>
                </div>
                <Order />
            </div>

            <div className='flex flex-col gap-6'>
              <div className='p-6 rounded-xl bg-white shadow-sm flex flex-col w-full'>
                <h2 className='text-xl font-semibold self-start mb-2'>Coupon</h2>
                <div className='bg-gray-200 w-full h-0.5 rounded-lg mb-4'></div>
                <input
                  type='text'
                  placeholder='Enter Your Coupon Code'
                  className='rounded-lg px-4 py-3 bg-gray-50 border border-gray-200 w-full focus:ring-2 focus:ring-blue-500 focus:outline-none'
                />
                <button
                  type='submit'
                  className='mt-4 text-blue-700 font-medium rounded-lg border border-blue-700 px-4 py-2.5 bg-white w-full cursor-pointer hover:bg-blue-50 hover:shadow-sm active:scale-95 transition-all duration-300'
                >
                    Apply Your Coupon
                </button>
              </div>

              <div className='p-6 rounded-xl bg-white shadow-sm flex flex-col w-full'>
                <h2 className='text-xl font-semibold self-start mb-2'>Order Summary</h2>
                <div className='bg-gray-200 w-full h-0.5 rounded-lg mb-4'></div>
                
                <div className='flex flex-col gap-3'>
                    {['Discount', 'Delivery', 'Tax'].map((value, key) => (
                    <div className='flex items-center justify-between w-full' key={key}>
                        <p className='text-gray-600'>{value}:</p>
                        <p className='text-black font-medium'>$0.00</p>
                    </div>
                    ))}
                    
                    <div className='bg-gray-100 w-full h-0.5 my-1'></div>
                    
                    <div className='flex items-center justify-between w-full pt-2'>
                        <p className='text-lg font-bold text-gray-800'>Total:</p>
                        <p className='text-lg font-bold text-blue-600'>${total.toFixed(2)}</p>
                    </div>
                </div>

                <button className='w-full bg-blue-600 text-white font-semibold py-3 rounded-lg mt-6 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100 cursor-pointer'>
                    Proceed to Checkout
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Cart