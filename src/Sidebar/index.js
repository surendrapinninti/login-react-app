import React, { useState } from "react";

import "./index.css";
import logo from "./Pepsi.png";
import logo2 from "./i.png";
import {Link} from 'react-router-dom';

function Sidebar() {
  if (localStorage.getItem("authtoken")==="") {
    window.location.href="/login" 
  }

  const [changeIcon, setChangeIcon] = useState(true);
  const [Active, setActive] = useState(true);
  const [logoutActive, setLogoutActive] = useState(false);


  function hendelMenuIcon() {
    setChangeIcon(false);
    setActive(false);
  }
  function hendelCloseIcon() {
    setChangeIcon(true);
    setActive(true);
  }
  function hendelLogoutBtn() {
    // alert(logoutActive);
    if(logoutActive===true){
      setLogoutActive(false);
    }else{
      setLogoutActive(true);
    }
  }

  return (
    <div>
      <div className={Active ? "front" : "front-full"}>
        <div className="main">
          {changeIcon ? (
            <i 
              className="fa fa-bars fa-2x icon-pos"
              onClick={hendelMenuIcon}
              aria-hidden="true"
            ></i>
          ) : (
            <i
              class="fa fa-times fa-2x icon-pos"
              onClick={hendelCloseIcon}
              aria-hidden="true"
            ></i>
          )}
          <div className={Active ? "text-center op-0" : "text-center op-1"}>
          <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
          </div>
          <div className="nm">
            <span className="inline-blobk nm-box text-center">VE</span>
            <span
              className={Active ? "inline-blobk op-0" : "inline-blobk op-1"}
            >
              Venkateswar Rao
              <br/>
            <a href="#" onClick={()=>{localStorage.setItem("authtoken",""); window.location.href="/login";  }} className={logoutActive ? "d-1" : "d-0"} style={{color:"white", textAlign:"center"}}>logout</a>
             
            </span>
            <span
              className={Active ? "inline-blobk op-0" : "inline-blobk op-1"}

             onClick={hendelLogoutBtn}
             >
              <i className="fa inline-blobk ">&#xf08b;</i>
            </span>
          </div>
        </div>
        <div className="scrollbar">
        <Link to="/Dashboard" className="link-nm"> 
          <div className=" nav-item">
        
           <span className="box"></span>
            <span className={Active ? "nav-text op-0" : "nav-text op-1"}> Dashboard </span>
          </div>
          </Link>

          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              ITSM
            </span>
          </div>

          <div className="nav-item">
            <span className="box"></span>

            <span
              className={
                Active ? "nav-text dropdown op-0" : "nav-text dropdown op-1"
              }
            >
              <button className="dropbtn dropdown">
                Optix <i className="fa fa-caret-down " aria-hidden="true"></i>{" "}
              </button>
              <div className="dropdown-content">
                <div>Option 1</div>
                <div>Option 2</div>
                <div>Option 3</div>
              </div>
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Hybrid IT <i className="fa fa-caret-down" aria-hidden="true"></i>
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Security
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Visibility
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Collaboration
            </span>
          </div>

          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Project Management
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Alarm Xplorer
            </span>
          </div>
          <div className=" nav-item">
            <span className="box"></span>

            <span className={Active ? "nav-text op-0" : "nav-text op-1"}>
              Setting
            </span>
          </div>
        </div>
        <div className="footer">
          <img className="f-logo" src={logo2} alt="logo" />
          <span className={Active ? "name f-op-0" : "name f-op-1"}>
            powered by VantageX
          </span>
        </div>
      </div>
    </div>
  );
  
}

export default Sidebar;
