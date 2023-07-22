import React from 'react';
import HeaderNavProduct from '../productscComponents/ProductPage/HeaderNavProduct';
import ImgNewProduct from '../imges/a.png';
import NavProducts from '../productscComponents/NavProducts';
import CustomTabPanel from '../productscComponents/TabNewProduct'

export default function NewProduct() {
  return (
    <>
        <div className='NewproductPage'>
                <div className='Hnp'><HeaderNavProduct/></div>
                    <div className='flex flex-col  ml-72   mb-0  divflexres'>
                        <div className=''>
                            <div className='relative imgnewproductres'>
                                <img src={ImgNewProduct} alt="" className='ImgNewproduct w-11/12 h-40' />
                                <div className='absolute w-10/12 h-28 top-32 ml-14 mb-10 '>
                                    <NavProducts/>
                                </div>
                            </div>
                           
                        </div>
                        <div className='mt-24 ml-44 customtabpanelres'>
                            <CustomTabPanel/>
                        </div>
                    </div>
        </div>
    </>
  )
}
