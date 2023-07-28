import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from 'react-icons/vsc';


export const SidebarData=[
    {
        title:"Dashboard",
        path:"/dashboard",
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,
            subNav:[
                {
                    title:"Default",
                    path:"/dashboard/default",
                    icon:<VscIcons.VscCircleFilled/>, 
                },
                {
                    title:"CRM",
                    path:"/dashboard/crm",
                    icon:<VscIcons.VscCircleFilled/>,  
                }
                ]
    },
    {
        title:"Pages",
        path:"/pages",
        icon:<AiIcons.AiFillFilePpt/>,
         iconClosed:<RiIcons.RiArrowDownSFill/>,
         iconOpened:<RiIcons.RiArrowUpSFill />,
            subNav:[
                {
                    title:"Profile",
                    path:"/pages/profile",
                    icon:<VscIcons.VscCircleFilled/>, 
                },
                {
                    title:"User",
                    path:"/pages/user",
                    icon:<VscIcons.VscCircleFilled/>,  
                },
                {
                    title:"Account",
                    path:"/pages/account",
                    icon:<VscIcons.VscCircleFilled/>,  
                },
                {
                    title:"Project",
                    path:"/pages/project",
                    icon:<VscIcons.VscCircleFilled/>,  
                },

                ]
    },
    {
        title:"Application",
        path:"/application",
        icon:<FaIcons.FaChartBar/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        subNav:[
            {
                title:"Kanban",
                path:"/application/kanban",
                icon:<VscIcons.VscCircleFilled/>, 
            },
            {
                title:"Wizard",
                path:"/application/wizard",
                icon:<VscIcons.VscCircleFilled/>,  
            },
            {
                title:"Data Table",
                path:"/application/datatable",
                icon:<VscIcons.VscCircleFilled/>,  
            },
            {
                title:"Calender",
                path:"/application/calender",
                icon:<VscIcons.VscCircleFilled/>,  
            },

            ]

    },
    {
        title:"products",
        path:"/products",
        icon:<RiIcons.RiShoppingCartFill/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        
        subNav:[
            {
                title:"New Product",
                path:"/products/newproduct",
                icon:<VscIcons.VscCircleFilled/>, 
            },
            {
                title:"Edit Product",
                path:"/products/editproduct",
                icon:<VscIcons.VscCircleFilled/>,  
            },
            {
                title:"Product Page",
                path:"/products/productpage",
                icon:<VscIcons.VscCircleFilled/>,  
            },
        ]

    },
    {
        title:"Sing In",
        path:"/singin",
        icon:< FaIcons.FaUser/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill />,
        
        subNav:[
            {
                title:"Basic",
                path:"/singin/basic",
                icon:<VscIcons.VscCircleFilled/>, 
            },
            {
                title:"Cover",
                path:"/singin/cover",
                icon:<VscIcons.VscCircleFilled/>,  
            },
            {
                title:"Lllustration",
                path:"/singin/lllustration",
                icon:<VscIcons.VscCircleFilled/>,  
            },
        ]
           
    }



]
