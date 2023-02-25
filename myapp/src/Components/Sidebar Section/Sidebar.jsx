import React from 'react'
import './sidebar.css'
import logo from '../../Images/logo.jpg'
import {AiOutlineHome} from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'
import{GoOrganization} from 'react-icons/go'
import {CgOrganisation} from 'react-icons/cg'
import {MdOutlineAssignment} from 'react-icons/md'


const Sidebar = () => {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Hampshire Heights"/>
      </div>

      <div className="menuDiv">
        <ul className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <AiOutlineHome className="icon"/>
            <span className="smallText">
              DashBoard
            </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <FiUsers className="icon"/>
            <span className="smallText">
              Users 
            </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <GoOrganization className="icon"/>
            <span className="smallText">
              Employees 
            </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <CgOrganisation className="icon"/>
            <span className="smallText">
              Organisation
            </span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
            <MdOutlineAssignment className="icon"/>
            <span className="smallText">
              Roles
            </span>
            </a>
          </li>
        </ul>
      </div>
      <div className="blank">
        
      </div>
    </div>
  )
}

export default Sidebar