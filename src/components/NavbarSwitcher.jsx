import React from "react";

const NavbarSwitcher = ({ setSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-3">
      <a className="navbar-brand" href="#">Catalog Hub</a>

      <div className="ms-auto">
        <button className="btn btn-outline-light mx-1" onClick={() => setSection("home")}>Home</button>
        <button className="btn btn-outline-light mx-1" onClick={() => setSection("about")}>About</button>
        <button className="btn btn-outline-light mx-1" onClick={() => setSection("catalog")}>Catalog</button>
      </div>
    </nav>
  );
};

export default NavbarSwitcher;
