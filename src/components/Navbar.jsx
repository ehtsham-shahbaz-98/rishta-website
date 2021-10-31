import React from "react";

import M from "materialize-css";

function Navbar() {
  // const M = window.M;
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, {});
  });
  return (
    <div>
      <nav>
        <div className="nav-wrapper pink darken-1">
          <a href="#!" className="brand-logo" style={{ marginLeft: "1%" }}>
            Shadi Registerar
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Home</a>
            </li>
            <li>
              <a href="badges.html">Rishtas</a>
            </li>
            <li>
              <a href="collapsible.html">Pricing</a>
            </li>
            <li>
              <a href="mobile.html">How It Works?</a>
            </li>
            <li>
              <a className="purple darken-2 btn" href="#">
                Post Rishta
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#!" className="brand-logo">
            Shadi Registerar
          </a>
        </li>
        <li>
          <a href="sass.html">Home</a>
        </li>
        <li>
          <a href="badges.html">Rishtas</a>
        </li>
        <li>
          <a href="collapsible.html">Pricing</a>
        </li>
        <li>
          <a href="mobile.html">How It Works?</a>
        </li>
        <li>
          <a className="purple darken-2 btn" href="#">
            Post Rishta
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
