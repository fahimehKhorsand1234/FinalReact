import React from 'react'
import InputAdornments from './InputPage3'
//import ButtonCont from './buttoncont'
//import ButtonOut from './ButtonOut'

export default function SocialNewProduct() {
  return (
    <div>
        <div className='ParentDivNew  rounded-xl text-white  p-4 text-sm  border-solid  border  border-indigo-950' >
            <p className='font-bold text-2xl mb-8'>Socials</p>
            <div className='flex flex-col'>
              <div className='mb-6'>
                <label className='mb-4'>Shopify Handle</label>
                <InputAdornments text="@Vision"/>
              </div>
              <div className='mb-6'>
                <label  className='mb-4'>Facebook Account</label>
                <InputAdornments text="https://"/>
              </div>
              <div className='mb-6'>
                 <label  className='mb-4'>Instragram Account</label>
                 <InputAdornments text="https://"/>
              </div>
              <div>
                {/* <div className=' flex  justify-between'>
                  <ButtonOut/>
                  <ButtonCont/>
                </div> */}
              </div>

            </div>
        </div>
    </div>
  )
}
