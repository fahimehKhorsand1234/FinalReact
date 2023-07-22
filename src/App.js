import React from "react";
import { Routes,Route } from "react-router-dom";
//import CoverPage from "./component/Pages/CoverPage";
//import Layout from "./component/Layout/Layout";
//import SideBar from '../src/component/Dashboard/Sidebar';
//import BasicPage from './component/Pages/BasicPage'
//import LllustrationPage from "./component/Pages/LllustrationPage";
//import SelectBig1 from './component/productscComponents/ProductPage/SelectBig1'
//import SelectSmall from './component/productscComponents/ProductPage/SelectSmall
//import Sidebar2 from './component/Dashboard/Sidebar2';
//import HeaderNavProduct from './component/productscComponents/ProductPage/HeaderNavProduct';
//import NewProduct from "./component/Pages/NewProduct";
import EditPages from "./component/Pages/EditPages";

function App() {
  return (
    <div>
     {/* <Routes>
        <Route path="/sidebar" element={<SideBar/>}/>
      </Routes>  */}
       {/* <Layout/> */} 
              {/* <SideBar/>   */}
         {/* <BasicPage/>  */}
       {/* <CoverPage/>  */}
       {/* <LllustrationPage/>  */}
      {/* <SelectBig1  text="Brasil" value1="1" value2="fff" value3="ggg" value4="jj" value5="uyuu"/> */}
      {/* <SelectSmall/> */}
      {/* <Sidebar2/> */}
      {/* <HeaderNavProduct/> */}
      {/* <NewProduct/> */}
      <EditPages/>
    </div>
  );
}

export default App;
