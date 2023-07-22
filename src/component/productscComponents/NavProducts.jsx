import React from 'react'
import TabsNav from './TabsNav'
import download from '../imges/download.png'

export default function NavProducts() {
  return (
    <div>
        <div className='navproducts flex flex-row rounded-xl text-white  items-center  justify-around '>
          <div className='flex flex-row gap-2 items-end'>
                <div className='py-4'><img src={download} alt=""  className=' rounded rounded-xl'/></div>
                <div className='py-8'>
                  <p className='font-bold'>Mark Johnson</p>
                  <p className='text-gray-500'>mark@simmmple.com</p>
                </div>
          </div>
            {/* <div '>
                <button className='w-32 h-10 cursor-pointer hover:outline outline-offset-0 rounded-xl bg-blue-500'><GridViewIcon/>OVERVIEW</button>
                <button className='w-32 h-10 cursor-pointer hover:outline outline-offset-0 rounded-xl bg-blue-500'><AutoAwesomeMotionIcon/>ITEMS</button>
                <button className='w-32 h-10 cursor-pointer hover:outline outline-offset-0 rounded-xl bg-blue-500' ><BorderColorIcon/>PROJECTS</button>
            </div> */}
            <div>
                 <TabsNav className="text-xs "/>
            </div>
                
            
            
        </div>
    </div>
  )
}
