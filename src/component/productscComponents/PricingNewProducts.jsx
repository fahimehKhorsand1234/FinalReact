import React from 'react'

//import ButtonCont from './buttoncont';
//import ButtonOut from './ButtonOut';
import InputPricing from './InputPricigProducts';
import SelectInput from './SelectInputPricing';
import InputTagsPricing from './InputTagsPricing';


export default function PricingNewProducts() {
  return (
        <>
            <div className='MediaDivNew  rounded-xl text-white  p-4 text-sm  border-solid  border  border-indigo-950 text-sm'>
                     <div>
                        <p className='font-bold text-2xl mb-8'> Pricing </p> 
                    </div>
                <div className='flex flex-col my-5'>
                  
                    <div>
                        <div className='flex  sm:flex-col lg:flex-row gap-2 m-4'>
                            <div>
                                <p className='mb-2'>Price</p>
                                <InputPricing  text="ey.$99.99"/>
                            </div>
                            <div>
                                <p className='mb-2'>Currency</p>
                                 <SelectInput/>
                            </div>
                            <div>
                                <p className='mb-2'>Sku</p>
                                <InputPricing  text="123654789"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                         <p className='mb-2'>Tags</p>
                         <InputTagsPricing/>
                        </div>
                    </div>
                    {/* <div className=' flex  justify-between mt-5'>
                        <ButtonOut/>
                        <ButtonCont/>
                    </div> */}

                </div>
            </div>
        </>
  )
}
