import React from 'react'
import FormPages from '../SingInpage/Form'
import image2 from '../../imges/lllustration.png'


export default function LllustrationPage() {
  return (
    <div>
        <div className='flex flex-row '>
            <div className='formlllpage   text-center'>
                <div className='mt-40 ml-40'>
                     <h2 className='text-4xl font-bold text-white'>Nice to see you</h2>
                     <p className='text-gray-400 text-sm font-semibold' >Enter your email and password to sign in</p>
                </div>
                <div className='ml-80 mt-14'>
                    <FormPages/>
                    <div className='mt-32 mr-12 w-100 h-11 mb-0'>
                        <p>
                                "@"
                                "2023"
                                ","
                            
                            <span>Made with ❤️ by </span>
                            <a target="_blank" href="https://www.creative-tim.com">Creative Tim </a>
                            "&"
                            <a target="_blank"  href="https://www.simmmple.com"> Simmmple</a>
                            for a better web
                        </p>
                    </div>
                    <div>
                        <ul className="flex flex-row ">
                            <li className='p-3 pl-16'><a href="#">CreativeTim</a></li>
                            <li className='p-3'><a href="#">Simmmple</a></li>
                            <li className='p-3' ><a href="#">Blog</a></li>
                            <li className='p-3'><a href="#">License</a></li>
                        </ul>
                    </div> 
                </div>
            </div>
            <div>
                    <div className='imglllpage'>
                        <img src={image2} alt=""  className='imglllpages'/>
                    </div>
            </div>
        </div>
     </div>   

  )
}
