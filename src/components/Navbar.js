import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav
      // className={`navbar navbar-expand-lg bg-body-tertiary
      // data-bs-theme=${props.mode}`}

      className={`navbar navbar-expand-lg navbar-${props.mode}
      bg-${props.mode}`}

    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/about">
                {props.about}
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li> */}
          </ul>
        </div>

        {/* htmlFor search bar */}
        {/* <nav className="navbar "> */}
          {/* <div className="container-fluid"> */}
            {/* <form className="d-flex" role="search"> */}
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
              {/* <button className="btn btn-outline-warning mx-2" type="submit">
                Dark
              </button> */}
            {/* </form> */}
          {/* </div> */}
        {/* </nav> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input
                  className="form-check-input"
                  onClick={props.toggleMode}
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  Enable Dark Mode
                </label>
              </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, about: PropTypes.string };
// setting default props
Navbar.defaultProps = { title: "Set Title", about: "About" };
