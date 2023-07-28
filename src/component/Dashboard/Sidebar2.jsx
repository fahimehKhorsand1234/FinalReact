import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "../Dashboard/SidebarData";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import SubMenu from "./SubMenu";
import logo1 from "../imges/download.png";
// background class Nav
//linear-gradient(to right,#2d2a92,#090e30)
// SidebarNav
//transition:350ms;

const Nav = styled.div`
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 1rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
@media(max-width:1024px){
  display:none;
}

  background: linear-gradient(to bottom, #151430, #131128);
  width: 250px;
  margin: 10px;
  border-radius: 12px;

  height: auto;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};

  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

export default function SideBar() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav> */}
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {/* <NavIcon to="#">
                  <FaIcons.FaAlignRight onClick={showSidebar}/>
                  
              </NavIcon> */}
            <div className="flex flex-row mt-5 justify-center mb-5 ">
              <img src={logo1} alt="" className="rounded rounded-xl" />
            </div>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
}
