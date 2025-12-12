import React from "react";

export default function Navbar({ active, onSwitch }) {
  return (
    <nav className="neon-nav d-flex justify-content-between align-items-center px-4">
      <div className="brand">
        <span className="brand-accent">ANIME</span> • WORLD
        <div className="brand-sub">Watch your favourite Contant.</div>
      </div>

      <div className="nav-actions">
        <button className={`nav-btn ${active==="Home"?"active":""}`} onClick={()=>onSwitch("Home")}>Home</button>
        <button className={`nav-btn ${active==="About"?"active":""}`} onClick={()=>onSwitch("About")}>About</button>
        <button className={`nav-btn ${active==="Project"?"primary":""}`} onClick={()=>onSwitch("Project")}>Project</button>
      </div>
    </nav>
  );
}
