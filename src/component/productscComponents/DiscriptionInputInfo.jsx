import React from 'react'
// import lib
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

// import component
//import SelectDiscription from './SelectDiscription'

export default function DiscriptionInputInfo() {
  return (
    <div className='flex flex-col border-solid  border rounded-lg border-indigo-950'>
        <div>
                 {/* <SelectDiscription/> */}
           <div className='flex flex-row justify-around border-solid border  border-indigo-950 rounded-t-lg'>
              <div> 
                <span>Normal</span>
              </div>
              <div> 
                  <FormatBoldIcon/>  
                  <FormatItalicIcon /> 
                  <FormatUnderlinedIcon/> 
                  <FormatListNumberedIcon/> 
                  <FormatListBulletedIcon/> 
              </div>
            </div>
        </div>
        <div className='border-solid border border-indigo-950  bg-blue-950 rounded-b-lg'>
            <textarea name="" id="" cols="" rows="4" className='bg-blue-950'></textarea>
        </div>
    </div>
  )
}
