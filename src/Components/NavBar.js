import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-dark">
        <div className="container-fluid">
        <nav class="navbar navbar-dark bg-white"> 
          <Link className="navbar-brand" to="/">
            <img src="https://sahyadri-beta.vercel.app/_next/image?url=%2Fimages%2Fwebsite-logo.png&w=640&q=75" height="40" weight="50"></img>
          </Link>
          </nav>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
            <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/Menu">
                  About
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Academics
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Admission
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Placement
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Lfe At Sahyadri
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Activities
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Media
                </Link>
              </li>
              </nav>
              <nav class="navbar navbar-primary bg-white">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Recruitment
                </Link>
              </li>
              </nav>
            </ul>
            {/* mx->gives space */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;