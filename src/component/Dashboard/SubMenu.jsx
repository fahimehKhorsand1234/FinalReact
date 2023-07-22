import React ,{ useState }  from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

 const SidebarLink = styled(Link)`
  display: flex;
  flex-direction:row;
 color:#fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

const SidebarLable=styled.span`
 margin-left:10px;
 color:#582cff;
 
 `;

const DropdownLink = styled(Link)`
  height: 50px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
`;

export default function SubMenu({item}) {
  const [subnav,setSubnav]=useState(false)

  const showSubnav = () => setSubnav(!subnav)

  return (
  
    <>
    
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div className='flex flex-row'>
            {item.icon}
                <SidebarLable >{item.title}</SidebarLable>
            </div>
             <div>
              {item.subNav && subnav
              ? item.iconOpened
              : item.subNav
              ?item.iconClosed
              :null}
            </div>
        </SidebarLink>       
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <DropdownLink to={item.path} key={index}>
                  {item.icon}
                  <SidebarLable>{item.title}</SidebarLable>
                </DropdownLink>
              );
           })} 
        
    </>
  );
}
