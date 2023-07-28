import React from 'react'
import InputPricing from './InputPricigProducts'
import SelectInputPricing  from './SelectInputPricing'
import DiscriptionInputInfo from './DiscriptionInputInfo'


export default function UserInfoProducts() {
  return (
    <>
        <div className='ParentDivNew  rounded-xl text-white  p-2 text-sm  border-solid  border  border-indigo-950'>
            <p className='font-bold text-lg'> Product Information </p>
            <div className='flex  sm:flex-col lg:flex-row justify-around '>
                <div>
                    <div className='flex flex-col'>
                        <div >
                            <div className='flex flex-col justify-between mb-5'>
                                <div><p className='mb-4 mt-2'>Product Name</p></div>
                                <div> 
                                    <InputPricing text="eg.LuxurySofa"/>
                                 </div>
                            </div>
                        </div >
                        <div>
                            <p className='mb-4 '>Description</p>
                            <DiscriptionInputInfo/>
                            
                        </div>
                        <div>
                            <p className='mb-4'>Collection</p>
                            <InputPricing text="eg.Summery"/>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='mb-4'>Weight</p>
                            <InputPricing text="eg.42"/>
                        </div>
                        <div>
                            <p className='mb-4'>Category</p>
                            <SelectInputPricing/>
                        </div>
                        <div>
                            <p className='mb-4'>Color</p>
                            <SelectInputPricing/>
                        </div>
                        <div>
                            <p className='mb-4'>Quantity</p>
                            <SelectInputPricing/>
                        </div>
                    </div>
                   
                </div>
                
            </div>
            
        </div>

    </>
  )
}
