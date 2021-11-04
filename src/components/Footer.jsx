import React from "react";

function Footer() {
  return (
    <footer
      class="page-footer hide-on-med-and-down"
      style={{
        backgroundImage: "linear-gradient(-20deg, #6944ff 0%, #6944ff 100%)",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Shadi Registerar</h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Home
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Rishtas
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  Pricing
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  How it works?
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 shadiregistrar. All rights reserved
          <div class="row">
            <a class="grey-text text-lighten-4 right" href="#!">
              {" "}
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
