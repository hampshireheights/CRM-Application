import React from 'react'
import './top.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <p> Hello User, Welcome!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Dashboard'/>
          <BiSearchAlt2 className= "icon"/>
        </div>

        <div className="adminDiv flex">
          <div className="adminImage">
          <AiOutlineUser className="icon"/>
          <span className='smallText'>
            davididowu172@gmail.com
          </span>
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="usercard flex">
          <h1>Users section</h1>
          <p>A Summary of people who can access the CRM    Application. The user section on the dashboard provides a summary of the activity and engagement of users on the platform</p>
            
          <div className="buttons flex">
            <button className="btn">Users<BsArrowRightShort className='icon' /></button>
          </div>
          
        </div>

        <div className="employeeCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Employees Section</h1>

              <div className="flex">
                <p>The employee section in a CRM application is where a company's employees can access and manage customer interactions, accounts, and other relevant data.</p>
              </div>
               <div className="buttons flex">
                <button className="btn">Employees<BsArrowRightShort className='icon' /></button>
                </div>
            </div>
           
          </div>
        </div>
         
        <div className="organisationCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Organisation Section</h1>
              <div className="flex">
                <p>The Organisation section in a CRM application is where a company's Organisation can access and manage customer interactions, accounts, and other relevant data.</p>
              </div>
               <div className="buttons flex">
                <button className="btn">Organisation<BsArrowRightShort className='icon' /></button>
              </div>
            </div>
           
          </div>
        </div>

        <div className="roleCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Roles Section</h1>
              <div className="flex">
                <p>The Role section in a CRM application is where a company's Organisation can access and manage customer interactions, accounts, and other relevant data.</p>
              </div>
               <div className="buttons flex">
                <button className="btn">Roles<BsArrowRightShort className='icon' /></button>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top