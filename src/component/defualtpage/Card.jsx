import React from 'react'
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function ManCard({text,textvalue,textsub,componenticon}) {
  return (
    <>
        <div className='ManCard m-5 flex flex-row justify-around  items-center'>
            <div className='flex flex-col  gap-4 '>
                <div>
                    <p className='text-base text-gray-500'>{text}</p>
                </div>
                <div>
                    <div className='flex flex-row'>
                        <div><p className='font-bold text-white text-xl'>{textvalue}</p></div>
                        <div><sub className='text-xs text-emerald-500'>{textsub}</sub></div>
                    </div>
                </div>
            </div>
            <div>
                    <div className='iconcard'>{componenticon}</div>
            </div>
        </div>
    </>
  )
}
//<ContactPageIcon className="MuiSvgIcon"/>