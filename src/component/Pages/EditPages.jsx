import React from 'react';
import HeaderNavProduct from '../productscComponents/ProductPage/HeaderNavProduct';
import ImgEditProduct from '../productscComponents/EditProductPage/ImgEditProducts';
import SocialNewProduct from '../productscComponents/SocialsNewProducts';
import  UserInfoProducts from '../productscComponents/UserInfoNewProduct';
import PricingNewProducts from '../productscComponents/SocialsNewProducts';
import MediaNewProducts from '../productscComponents/MediaNewProducts';

export default function Editproductpage () {
  return (
    <div className='ImgEditProduct '>
        <HeaderNavProduct>
            <div className='flex flex-col mb-8 mt-4'>
            <div className='text-white text-3xl font-bold'><h1>Make the changes below</h1></div>
            <div className='text-slate-900 mt-2'><p>We’re constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play.</p></div>
            </div>
            <div className=' flex sm:flex-col lg:flex-row  justify-around  '>
                <div className=' '>
                    <div className='flex flex-col'>
                        <div className=''><ImgEditProduct/></div>
                        <div className='mt-4'><SocialNewProduct/></div>
                    </div>
                </div>
                <div className=''>
                    <div className='flex flex-col'>
                        <div className=''>< UserInfoProducts/></div>
                        <div className='mt-5'><PricingNewProducts/></div>
                        <div className='mt-5'><MediaNewProducts/></div>
                    </div>
                </div>
            </div>
        </HeaderNavProduct>
    </div>
  
  )
}
