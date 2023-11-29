import React from "react";
import logo from '../../logo.svg'

export const NavBar = () => {
  return (
    <>
      <div className="container-nav fixed-top border-bottom border-dark">
        <nav className="navbar navbar-light bg-secondary-subtle  d-flex justify-content-start align-items-center">
          <div className="container-logo">
            <img
              src={logo}
              alt="logo-react"
              width="50"
              height="50"
              className="img-fluid"
            />
          </div>
          <div className="container-text-nav">
            <p className="text-primary-emphasis h5">Prueba 28 - 11 Pablo Torrecilla</p>
          </div>
        </nav>
      </div>
    </>
  );
};
