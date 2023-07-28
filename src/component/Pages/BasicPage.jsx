import React from "react";
// import in lib
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
// import in component
import FormPages from "../formComponent/SingInpage/Form";
import HeaderNavForms from '../formComponent/SingInpage/HeaderNavForms';

export default function BasicSingIn() {
  return (
    <div className="bg-gradient-to-r from-indigo-950 to-indigo-700 w-full h-full">
        <div className="imgnavform absolute inset-x-0  mb-0 w-full h-56">
           <HeaderNavForms/>   
        </div>
        <div className=" z-[1] relative flex flex-col items-center ">
            <div>
                <div className="flex flex-col items-center justify-center text-center mt-20 mb-10  text-white">
                    <div className="text-4xl font-bold">Welcome back!</div>
                    <div className="w-96 h-10 mt-2">
                        <p>Use these awesome forms to login or create new 
                        account in your project for free.</p>
                    </div>
                </div>
            </div>
            <div className="formpages  rounded-xl flex flex-col  ring-4 ring-indigo-900">
                <div className=" flex flex-col justify-center items-center">
                    <div className="mt-0 mb-0"><p>Sing In With</p></div>
                    <div className=" flex flex-row mt-8 mb-4 text-center gap-4 pt-2">
                        <div className=" rounded-2xl w-20 h-20  p-6 ring-2 ring-indigo-900 "><FacebookIcon/></div>
                        <div className=" rounded-2xl w-20 h-20  p-6 ring-2 ring-indigo-900 "><GoogleIcon/></div>
                        <div className=" rounded-2xl w-20 h-20  p-6 ring-2 ring-indigo-900 "><AppleIcon/></div>
                    </div>
                    <div><p>or</p></div>
                </div>
                
                <div>
                    <FormPages/>
                </div>
            </div>
        
            
        </div>
    </div>
  )
}

