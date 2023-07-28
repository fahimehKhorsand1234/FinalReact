import React from 'react';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import SummarizeIcon from '@mui/icons-material/Summarize';
import TableDashboard from '../defualtpage/TableDefault';
import HeaderNavProduct from '../productscComponents/ProductPage/HeaderNavProduct';
import ManCard from '../defualtpage/Card';
import Charttable from '../defualtpage/Charttable';
import Linerchart from '../defualtpage/Linerchart';
import FooterForm from '../formComponent/FooterForm';


export default function Home() {
  return (
    <>
      <div className='NewproductPage'>
         <HeaderNavProduct>
            <div className='text-3xl font-bold mt-4 mb-4'><h1>General Statistics</h1></div>
            <div className='flex flex-col'>
              <div>
                <div className='flex lg:flex-row sm:flex-col'>
                  <div><ManCard text="Today's Money" textvalue="$53,000" textsub="+55%" componenticon={<SummarizeIcon className="MuiSvgIcon"/>}/></div>
                  <div><ManCard  text="New Clients" textvalue="+$3,020" textsub="-14%" componenticon={<ContactPageIcon className="MuiSvgIcon"/>}/></div>
                </div>
              </div>
              <div>
                <div className='flex lg:flex-row sm:flex-col'>
                  <div><ManCard text="Today's Users" textvalue="$53,000" textsub="+5%" componenticon={<LanguageIcon className="MuiSvgIcon"/>}/></div>
                  <div><ManCard text="Total Sales" textvalue="173,000" textsub="+8%" componenticon={<AddShoppingCartIcon className="MuiSvgIcon"/>}/></div>
                </div>
              </div>
            </div>
            <div>
              <div><img src="" alt="" /></div>
            </div>
            <div className='w-1/2 ml-4 '>
              <TableDashboard/>
            </div>
            <div className='flex lg:flex-row sm:flex-col mt-8 mb-4 justify-around mb-0'>
              <div className='bgcolorchart rounded rounded-xl '>
                  <div className=' flex flex-col justify-around'> 
                      <div> <Linerchart/></div>
                      <div className='font-bold text-xl ml-2'><p>Active Users</p></div>
                  </div>
                </div>
              <div className='bgcolorchart rounded rounded-xl  '><Charttable/></div>
              
            </div>
            
            
         </HeaderNavProduct>
      </div>
    </>
  )
}
