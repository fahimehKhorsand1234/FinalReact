import React from 'react'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'
import SwitchButton from './SwitchButoon'
import ButtonForm from './ButtonForm'
import { FormControl } from '@mui/material'
export default function FormPages({widthx,heghity}) {
  return (
    <FormControl className='flex flex-col justify-center text-white '>
        <div >
          <div className='flex flex-col justify-center text-left' >
            <div>Email</div>
            <div><InputEmail /> </div>
          </div>
           <div className='flex flex-col  justify-center text-left'>
            <div><span>Password</span></div>
            <div><InputPassword/> </div>
           </div>
            
            <div className='flex flex-col  justify-center text-left'>
            <div><SwitchButton/><span>Remember me</span></div>
            
            </div>
            <div className='flex flex-col  justify-center' >
            <ButtonForm text="Sing IN"/>
            </div>
            
            <div className='flex flex-col  justify-center'>
                <p>Don't have an account?<span>Sing Up</span></p>
            </div>
        </div>
    </FormControl>
  )
}
