import React from "react";

const FilterNav = () => {
  return (
    <div>
      <nav>
        <div class="nav-wrapper grey darken-4 grey-text text-darken-4">
          <a class="brand-logo center" style={{ fontSize: "20px" }}>
            Applied Filters
          </a>
          <a data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">filter</i>
          </a>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
            <li className="grey darken-2 text-black active ">
              <a>All</a>
            </li>
            <li>
              <a>Age</a>
            </li>
            <li>
              <a>Height</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default FilterNav;
