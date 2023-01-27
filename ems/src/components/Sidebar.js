import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

// import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// import { AiFillHome } from 'react-icons/ai'
// import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// import "react-pro-sidebar/dist/css/style.css"
// import { useState } from "react";
// import { AiOutlineMenu } from "react-icons/ai";
// import { FaGem, FaHeart } from "react-icons/fa";
// import {
//   Menu,
//   MenuItem,
//   ProSidebar,
//   SidebarHeader,
//   SubMenu,
// } from "react-pro-sidebar";

// import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    // <div style={{ display: 'flex', height: '100vh', width: '200px', position: 'fixed', top: 0, left: 0 }}>
    <div style={{ height: '100%', width: '250px', position: 'fixed', zIndex: 1, top: 0, left: 0, overflowX: 'hidden'}}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader >
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={'https://seeklogo.com/images/E/ems-logo-53A1C3E150-seeklogo.com.png'}
                        alt=""
                        style={{ width: '65px' }}
                        />
            <h6 className="ml-2">EMS ™</h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink to="/Dashboard" >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/profile-page" >
              <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
            </NavLink>
            <NavLink to="/leaves" >
              <CDBSidebarMenuItem icon="table">Leaves</CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink to="/attendance" >
              <CDBSidebarMenuItem icon="chart-line">Attendance</CDBSidebarMenuItem>
            </NavLink>

            <NavLink to="/Dashboard" >
              <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '5px 2px',
            }}          >
            @all rights Reserved ™
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>

    //     <SideNav>
//     <SideNav.Toggle />
//     <SideNav.Nav defaultSelected="home">
//         <NavItem eventKey="home">
//             <NavIcon>
//                 <i style={{ fontSize: '1.75em' }}><AiFillHome/></i>
//             </NavIcon>
//             <NavText>
//                 Home
//             </NavText>
//         </NavItem>
//         <NavItem eventKey="charts">
//             <NavIcon>
//             <i style={{ fontSize: '1.75em' }}><AiFillHome/></i>
//             </NavIcon>
//             <NavText>
//                 Leave
//             </NavText>
//             <NavItem eventKey="charts/linechart">
//                 <NavText>
//                     Apply leave
//                 </NavText>
//             </NavItem>
//             <NavItem eventKey="charts/barchart">
//                 <NavText>
//                  List of leaves
//                 </NavText>
//             </NavItem>
//         </NavItem>
//     </SideNav.Nav>
    //      </SideNav>


        // <ProSidebar style={styles.sideBarHeight} collapsed={collapsed}>
        // <SidebarHeader>
        // <div style={styles.menuIcon} onClick={onClickMenuIcon}>
        //     <AiOutlineMenu />
        // </div>
        // </SidebarHeader>
        // <Menu iconShape="square">
        // <MenuItem icon={<FaGem />}> Dashboard</MenuItem>
        // <MenuItem icon={<FaGem />}>Users</MenuItem>
        // <SubMenu title="Reports" icon={<FaHeart />}>
        //     <MenuItem>Track Report</MenuItem>
        //     <MenuItem>Inventory Report</MenuItem>
        //     <MenuItem>Customer Report</MenuItem>
        // </SubMenu>
        // <SubMenu title="Account" icon={<FaHeart />}>
        //     <MenuItem>Permissions</MenuItem>
        //     <MenuItem>Settings</MenuItem>
        // </SubMenu>
        // <SubMenu title="Email" icon={<FaHeart />}>
        //     <MenuItem>Notification</MenuItem>
        // </SubMenu>
        // </Menu>
        // </ProSidebar>
  );
};

export default Sidebar;