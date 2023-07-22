import React from 'react'
import FormPages from '../SingInpage/Form'
import FooterForm from '../FooterForm'

export default function CoverPage() {
  return (
    <div >
        <div className=' w-full h-full flex flex-row'>
            <div className='imgcoverpage z-0'>
                    <div className='text-center text-white font-semibold mt-80'>
                        <p className='text-2xl'> I N S P I R E D  B Y  T H E  F U T U R E :</p>  
                        <p className='text-4xl'> T H E  V I S I O N  U I  D A S H B O A R D </p>
                    </div>
            </div>
            <div className='divFormCoverPage text-white pl-32 pt-52'>
                        <h2 className='text-4xl font-bold '>Sing In</h2>
                        <p class="chakra-text css-vapw0r text-gray-400">Enter your email and password to sign in</p>
                        <FormPages/>
                        <FooterForm/>
            </div>
           
        </div>
    
    </div>
  )
}
