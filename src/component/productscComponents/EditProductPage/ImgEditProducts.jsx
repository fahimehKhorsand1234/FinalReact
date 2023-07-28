import React from 'react'
import image3 from '../../imges/EditProduct.png'

export default function ImgEditProduct() {
  return (
    
    <>
        <div className='EditImgPageProduct w-full  p-3 text-white rounded-2xl '>
            <p className='mb-6 font-bold text-2xl	'>Product Image</p>
            <div><img src={image3} alt=""  className=''/></div>
            <div>
                <button className='rounded-xl text-white bg-indigo-900 w-24 h-10 m-2 font-bold text-xs'>EDIT</button>
                <button className='rounded-xl text-gray-500 w-24 h-10 bg-slate-50 font-bold text-xs'>REMOVE</button>
            </div>
        </div>
    </>
  );
}
