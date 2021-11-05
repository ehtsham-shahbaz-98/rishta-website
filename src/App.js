import React, { useState, useEffect } from "react";

import "./App.css";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Footer from "./components/Footer";

import Test from "./components/Test";

import M from "materialize-css";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  });

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll("select");
    var instances = M.FormSelect.init(elems, {});
  });

  return (
    <>
      <Navbar />
      {/* <Test /> */}
      <div className="container" style={{ width: "100%", marginTop: "2%" }}>
        <div className="row">
          {/* <Filter /> */}
          <Container />
        </div>
      </div>
      {/* hide-on-large-only */}
      <div className="row" style={{ marginBottom: "1%", marginTop: "1%" }}>
        <div className="col s10 offset-s10 fixed-action-btn">
          <a
            data-target="modal1"
            class="btn-floating btn-large waves-light white pulse btn modal-trigger"
          >
            <i class="material-icons" style={{ color: "#000000" }}>
              filter_list
            </i>
          </a>

          <div id="modal1" class="modal">
            <div class="modal-content">
              {/* <h4>Modal Header</h4>
              <p>A bunch of text</p> */}
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
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3">Divorced</option>
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
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3">Divorced</option>
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
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3">Divorced</option>
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
                          <option value="1">Single</option>
                          <option value="2">Married</option>
                          <option value="3">Divorced</option>
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
            {/* <div class="modal-footer">
              <a
                href="#!"
                class="modal-close waves-effect waves-green btn-flat"
              >
                Agree
              </a>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
