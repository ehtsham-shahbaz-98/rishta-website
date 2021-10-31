import React, { useState, useEffect } from "react";
import axios from "axios";

import TinderCard from "react-tinder-card";

import "../assets/css/TinderCards.css";
import "../assets/css/Cards.scss";

import $ from "jquery";

function Card() {
  const [rishtas, setRishtas] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://shadiregistrar.com/api/v1/rishtas/?id=&gender=&filter=&age_from=&age_to=&height_from=&height_to=&income=&caste=&sect=&looking_for=&location="
      )
      .then((res) => {
        const result = res.data.data;

        setRishtas(result.rishtas);
        console.log(result.rishtas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const url = "https://shadiregistrar.com/";

  $("button").click(function () {
    $("button").toggleClass("active");
    $(".title").toggleClass("active");
    $("nav").toggleClass("active");
  });

  return (
    <>
      {rishtas.map((item, index) => {
        return (
          <>
            <div key={index} className="hide-on-med-and-down">
              <div class="contact-area">
                <div class="contact">
                  <main>
                    <section>
                      <div class="content">
                        <img src={url + item.avatar_url} alt="Profile Image" />

                        <aside>
                          <h1>Rishta ID: {item.id}</h1>
                          <p>
                            {item.city}, {item.country}
                          </p>
                          <p>Age: {item.age}</p>
                        </aside>

                        <button style={{ position: "absolute" }}>
                          <span>View Details</span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                          >
                            {" "}
                            <g class="nc-icon-wrapper" fill="#444444">
                              {" "}
                              <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>{" "}
                            </g>{" "}
                          </svg>
                        </button>
                      </div>

                      <div class="title">
                        <p>Contact Me</p>
                      </div>
                    </section>
                  </main>

                  <nav>
                    <a href="#" class="gmail">
                      <div class="icon">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </div>

                      <div class="content">
                        <h1>Email</h1>
                        <span>Riccavallo@gmail.com</span>
                      </div>

                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        {" "}
                        <g class="nc-icon-wrapper" fill="#444444">
                          {" "}
                          <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                        </g>{" "}
                      </svg>
                    </a>

                    <a href="#" class="facebook">
                      <div class="icon">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          stroke-linejoin="round"
                          stroke-miterlimit="1.414"
                        >
                          <path
                            d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>

                      <div class="content">
                        <h1>Facebook</h1>
                        <span>Riccardo Cavallo</span>
                      </div>

                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        {" "}
                        <g class="nc-icon-wrapper" fill="#444444">
                          {" "}
                          <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                        </g>{" "}
                      </svg>
                    </a>

                    <a href="#" class="twitter">
                      <div class="icon">
                        <svg
                          viewBox="0 0 16 16"
                          xmlns="http://www.w3.org/2000/svg"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          stroke-linejoin="round"
                          stroke-miterlimit="1.414"
                        >
                          <path
                            d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                            fill-rule="nonzero"
                          />
                        </svg>
                      </div>

                      <div class="content">
                        <h1>Twitter</h1>
                        <span>@RichoxDesign</span>
                      </div>

                      <svg
                        class="arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        {" "}
                        <g class="nc-icon-wrapper" fill="#444444">
                          {" "}
                          <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                        </g>{" "}
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
              {/* <div class="col s12 hoverable">
                <h3 className="header center-align">Rishta ID: {item.id}</h3>
                <h4 className="header center-align">
                  Location: {item.city}, {item.country}
                </h4>
                <div class="card horizontal">
                  <div class="card-image">
                    <img
                      className="img-responsive"
                      src={url + item.avatar_url}
                      style={{ height: "200px", width: "250px" }}
                    />
                  </div>
                  <div class="card-stacked">
                    <div class="card-content">
                      <h5>Marital Status: {item.marital_status}</h5>
                      <h5>Looking For: {item.looking_for}</h5>
                      <h5>Age: {item.age}</h5>
                      <h5>Height: {item.height}</h5>
                      <h5>Caste: {item.caste}</h5>
                      <h5>Sect: {item.sect}</h5>
                      <h5>Education: {item.qualifications}</h5>
                      <h5>Proposal Status: {item.proposal_status}</h5>
                    </div>
                    <div class="card-action" style={{ textAlign: "center" }}>
                      <a class="waves-effect green btn" href="#">
                        View Details
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="tinderCards__cardContainer">
              <TinderCard
                className="swipe hide-on-large-only"
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                preventSwipe={["up", "down"]}
                key={item.id}
              >
                <div class="contact-area">
                  <div class="contact">
                    <main>
                      <section>
                        <div class="content">
                          <img
                            src={url + item.avatar_url}
                            alt="Profile Image"
                          />

                          <aside>
                            <h1>Rishta ID: {item.id}</h1>
                            <p>
                              {item.city}, {item.country}
                            </p>
                            <p>Age: {item.age}</p>
                          </aside>

                          <button style={{ position: "absolute" }}>
                            <span>View Details</span>

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                            >
                              {" "}
                              <g class="nc-icon-wrapper" fill="#444444">
                                {" "}
                                <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>{" "}
                              </g>{" "}
                            </svg>
                          </button>
                        </div>

                        <div class="title">
                          <p>Contact Me</p>
                        </div>
                      </section>
                    </main>

                    <nav>
                      <a href="#" class="gmail">
                        <div class="icon">
                          <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z"
                              fill-rule="evenodd"
                            />
                          </svg>
                        </div>

                        <div class="content">
                          <h1>Email</h1>
                          <span>Riccavallo@gmail.com</span>
                        </div>

                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          {" "}
                          <g class="nc-icon-wrapper" fill="#444444">
                            {" "}
                            <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                          </g>{" "}
                        </svg>
                      </a>

                      <a href="#" class="facebook">
                        <div class="icon">
                          <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            stroke-linejoin="round"
                            stroke-miterlimit="1.414"
                          >
                            <path
                              d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0"
                              fill-rule="nonzero"
                            />
                          </svg>
                        </div>

                        <div class="content">
                          <h1>Facebook</h1>
                          <span>Riccardo Cavallo</span>
                        </div>

                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          {" "}
                          <g class="nc-icon-wrapper" fill="#444444">
                            {" "}
                            <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                          </g>{" "}
                        </svg>
                      </a>

                      <a href="#" class="twitter">
                        <div class="icon">
                          <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            stroke-linejoin="round"
                            stroke-miterlimit="1.414"
                          >
                            <path
                              d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z"
                              fill-rule="nonzero"
                            />
                          </svg>
                        </div>

                        <div class="content">
                          <h1>Twitter</h1>
                          <span>@RichoxDesign</span>
                        </div>

                        <svg
                          class="arrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width="48"
                          height="48"
                          viewBox="0 0 48 48"
                        >
                          {" "}
                          <g class="nc-icon-wrapper" fill="#444444">
                            {" "}
                            <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path>{" "}
                          </g>{" "}
                        </svg>
                      </a>
                    </nav>
                  </div>
                  {/* <div
                  style={{
                    backgroundImage: `url(${url + item.avatar_url})`,
                  }}
                  className="card-new"
                >
                  <h3>Rishta ID: {item.id}</h3>
                </div> */}
                </div>
              </TinderCard>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Card;
