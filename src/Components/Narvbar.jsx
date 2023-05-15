import * as React from 'react';
import "../assets/css/style.css"
import pic from "../assets/images/user.jpg"
import { Link, useNavigate } from 'react-router-dom';



const Navbar = () => {
  var navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate("/login")
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg background sticky-top text-center mb-2">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">Fashion Mart</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-light active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="shop/All/All/All">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="#">Contact</Link>
              </li>
            </ul>
            <form className="d-flex w-100" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("login") ?
                <li className="nav-item dropdown">
                  <Link className="nav-link text-light dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={pic} width="40px" height="40px" style={{borderRadius:"50%"}}></img>
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                    <li><Link className="dropdown-item" to="#">Cart</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                  </ul>
                </li> :
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">Login</Link>
                </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
