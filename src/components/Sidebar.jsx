import React from "react";
import { FaHome, FaFolder, FaInfoCircle } from "react-icons/fa";

export default function Sidebar({ active, onSwitch, itemCount }) {
  return (
    <div className="sidebar-inner">
      <h5 className="sidebar-title">Dashboard</h5>
      <p className="small text-muted">Ready to streaming?</p>

      <ul className="list-unstyled">
        <li className={`side-item ${active==="Home"?"on":""}`} onClick={()=>onSwitch("Home")}><FaHome className="me-2"/> Home</li>
        <li className={`side-item ${active==="Project"?"on":""}`} onClick={()=>onSwitch("Project")}><FaFolder className="me-2"/> Project</li>
        <li className={`side-item ${active==="About"?"on":""}`} onClick={()=>onSwitch("About")}><FaInfoCircle className="me-2"/> About</li>
      </ul>

      <div className="mt-4">
        <small className="text-muted">Tip: Add items in Project → Add Item</small>
      </div>

      <div className="mt-4 stats">
        <div className="stat">Items <strong>{itemCount}</strong></div>
      </div>
    </div>
  );
}
