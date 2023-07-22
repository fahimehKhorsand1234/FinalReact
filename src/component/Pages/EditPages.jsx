import React from 'react'
import HeaderNavForm from '../formComponent/SingInpage/HeaderNavForms';
import ImgEditProduct from '../productscComponents/EditProductPage/ImgEditProducts';
import SocialNewProduct from '../productscComponents/SocialsNewProducts';
import  UserInfoProducts from '../productscComponents/UserInfoNewProduct';
import PricingNewProducts from '../productscComponents/SocialsNewProducts';
import MediaNewProducts from '../productscComponents/MediaNewProducts';
export default function () {
  return (
    <div className='ImgEditProduct w-full h-full'>
        <div className=' '><HeaderNavForm/></div>
        <div className='flex flex-row  justify-around'>
            <div className=' '>
                <div className='flex flex-col  justify-center'>
                    <div className=''><ImgEditProduct/></div>
                    <div className='mt-10'><SocialNewProduct/></div>
                </div>
            </div>
            <div className=''>
                <div className='flex flex-col justify-center'>
                    <div className='mt-5'>< UserInfoProducts/></div>
                    <div className='mt-5'><PricingNewProducts/></div>
                    <div className='mt-5'><MediaNewProducts/></div>
                </div>
            </div>
        </div>
    
    
    
    
    
    </div>
  
  )
}
