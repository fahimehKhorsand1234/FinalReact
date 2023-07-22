import React from 'react'
import FormPages from '../formComponent/SingInpage/Form'
import FooterForm from '../formComponent/FooterForm'
import HeaderNavForms from '../formComponent/SingInpage/HeaderNavForms';




export default function CoverPage() {
  return (
    <div className='relative w-full h-full' >
        <div className='headernavcoverpage inset-x-60  mb-0 '>
                <HeaderNavForms/>
        </div>
        
        <div className=' flex flex-row '>
            <div className='imgcoverpage '>
                    <div className=' flex flex-col text-white font-bold px-20  mt-80'>
                      <div>
                         <p className='text-2xl'> I N S P I R E D  B Y  T H E  F U T U R E :</p>
                      </div>
                      <div>
                          <p className='text-3xl'> T H E  V I S I O N  U I  D A S H B O A R  </p>
                      </div>
                    </div>
            </div>
            <div className='divFormCoverPage  text-white flex flex-col justify-evenly px-40 pt-48 '>
              <div>
                  <h2 className='text-4xl font-bold '>Sing In</h2>
                  <p class=" text-gray-400">Enter your email and password to sign in</p>
              </div>
               <div className='FormCoverPage'>
                  <FormPages/>
              </div>
              <div>
                  <FooterForm/>
              </div>                 
            </div>
           
        </div>
    
    </div>
  )
}