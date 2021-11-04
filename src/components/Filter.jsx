import React from "react";

import M from "materialize-css";

function Filter() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });

  return (
    <div
      className="col s4 hide-on-med-and-down"
      style={{
        background: "#EAEAEA",
        padding: "1%",
        color: "black",
        fontWeight: "800",
        fontSize: "40px",
      }}
    >
      <div className="container">
        <div class="row">
          <form class="col s12">
            <div class="row">
              <div class="col s12">
                <h5>Filter Items</h5>
              </div>
            </div>
            <div className="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </select>
                <label>Gender</label>
              </div>
            </div>
            <div class="row">
              {/* <div class="input-field col s6">
                <input id="gender" type="select" class="validate" />
                <label for="gender">Gender</label>
              </div> */}
              <div class="input-field col s12">
                <input id="age" type="number" class="validate" />
                <label for="age">Age</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="height" type="number" class="validate" />
                <label for="height">Height</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    ----
                  </option>
                  <option value="1">Single</option>
                  <option value="2">Married</option>
                  <option value="3">Divorced</option>
                </select>
                <label>Looking For</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    ----
                  </option>
                  <option value="1">Islamabad</option>
                  <option value="2">Lahore</option>
                  <option value="3">Karachi</option>
                </select>
                <label>Location</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    ----
                  </option>
                  <option value="1">Malik</option>
                  <option value="2">Rajput</option>
                  <option value="3">Pathan</option>
                </select>
                <label>Caste</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    ----
                  </option>
                  <option value="1">Sunni</option>
                  <option value="2">Shia</option>
                  <option value="3">Other</option>
                </select>
                <label>Sect</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <select>
                  <option value="" disabled selected>
                    ----
                  </option>
                  <option value="1">10K - 50K</option>
                  <option value="2">50K - 100K</option>
                  <option value="3">100K+</option>
                </select>
                <label>Income</label>
              </div>
            </div>
            <div class="row">
              <div class="col-12" style={{ textAlign: "center" }}>
                <a class="waves-effect pink btn">Find Match</a>
              </div>
            </div>
            {/* <div class="row">
              <div class="col s12">
                This is an inline input field:
                <div class="input-field inline">
                  <input id="email_inline" type="email" class="validate" />
                  <label for="email_inline">Email</label>
                  <span
                    class="helper-text"
                    data-error="wrong"
                    data-success="right"
                  >
                    Helper text
                  </span>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
