import React from 'react'

export default function FooterForm() {
  return (
    <div>
        <div className='mt-48'>
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
                        <ul className="flex flex-row mt-0 ">
                            <li className='p-3 pl-16'><a href="#">CreativeTim</a></li>
                            <li className='p-3'><a href="#">Simmmple</a></li>
                            <li className='p-3' ><a href="#">Blog</a></li>
                            <li className='p-3'><a href="#">License</a></li>
                        </ul>
                    </div>
    </div>
  )
}
