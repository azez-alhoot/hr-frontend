import React from 'react'
import '../css/nav.css'

export default function Navbar(){
  const loggedIn = localStorage.getItem('authUser')
  
  const logout = () => {
    localStorage.clear();
    window.location.href = '/'
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
      <a className="navbar-brand" href="/">
        Human Resource System
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse center-nav-items" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          {!loggedIn &&(<li className="nav-item">
            <a className="nav-link" href="/apply">
              Apply
            </a>
          </li>)}
          {!loggedIn && (<li className="nav-item">
            <a className="nav-link" href="/login">
              Login
            </a>
          </li>)}
          {loggedIn && (<li className="nav-item">
            <a className="nav-link" href="/candidates">
              Candidates
            </a>
          </li>)}
          {loggedIn && (<li className="nav-item">
            <a className="nav-link" href="#" onClick={()=>logout()}>
              Logout
            </a>
          </li>)}
        </ul>
      </div>
    </nav>
  );
};
