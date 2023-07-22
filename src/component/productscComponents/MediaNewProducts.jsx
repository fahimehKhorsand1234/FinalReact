import React from 'react'
import ButtonCont from './buttoncont'
import ButtonOut from './ButtonOut'
import MultilineInput from './MultiLineInput'

export default function MediaNewProducts() {
  return (
    <div>
        <div className='MediaDivNew  rounded-xl text-white  p-4 text-sm  border-solid  border  border-indigo-950'>
            <p className='font-bold text-2xl mb-14'>Media</p>
            <div className='mb-4'>
                <p className='mb-4'>Products images</p>
                < MultilineInput className="text-center"/>
            </div>
            {/* <div className=' flex  justify-between'>
                  <ButtonOut/>
                  <ButtonCont/>
            </div> */}
        </div>
    </div>
  )
}
