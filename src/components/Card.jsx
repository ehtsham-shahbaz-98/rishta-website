import React, { useState, useEffect } from "react";
import axios from "axios";

import TinderCard from "react-tinder-card";
import Tinder from "./Tinder";

import "../assets/css/TinderCards.scss";
import "../assets/css/CardsMain.scss";

// import Info from "./Info";

import BounceLoader from "react-spinners/BounceLoader";

import M from "materialize-css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

function Card() {
  const [rishtas, setRishtas] = useState([]);
  const [visible, setVisible] = useState(3);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showID, setShowID] = useState(null);
  const [deviceType, setDeviceType] = useState(["tablet", "mobile"]);
  const view = "View More";

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://shadiregistrar.com/api/v1/rishtas/?id=&gender=&filter=&age_from=&age_to=&height_from=&height_to=&income=&caste=&sect=&looking_for=&location="
      )
      .then((res) => {
        const result = res.data.data;

        setRishtas(result.rishtas);

        console.log(result.rishtas);
        setLoading(false);
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
  <>
    <a class="waves-effect waves-light btn modal-trigger" href="#modal2">
      Modal
    </a>

    <div id="modal2" class="modal">
      <div class="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
          Agree
        </a>
      </div>
    </div>
  </>;

  document.addEventListener("DOMContentLoaded", function () {
    var elems = document.querySelectorAll(".modal");
    var instances = M.Modal.init(elems, {});
  });

  return (
    <>
      {loading ? (
        <div
          className="loader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100vh",
          }}
        >
          <BounceLoader size={30} color={"pink"} loading={loading} />
        </div>
      ) : (
        <>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            focusOnSelect={true}
            // autoPlay={deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={0}
            containerClass="carousel-container"
            removeArrowOnDeviceType={deviceType}
            deviceType={deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="noselect"
          >
            {rishtas
              .filter((rishtas) => rishtas.gender === "Female")
              .map((item, index) => {
                return (
                  <>
                    {/* className="hide-on-med-and-down" */}
                    <div key={index}>
                      <div class="wrapper">
                        <div class="profile-card js-profile-card">
                          <div class="profile-card__img">
                            <img
                              style={{ pointerEvents: "none" }}
                              src={url + item.avatar_url}
                              alt="profile card"
                            />
                          </div>

                          <div class="profile-card__cnt js-profile-cnt">
                            <div class="profile-card__name">
                              Rishta ID: {item.id}
                            </div>
                            <div class="profile-card__txt">
                              Marital Status:{" "}
                              <strong>{item.marital_status}</strong>
                            </div>
                            <div class="profile-card-loc">
                              <span class="profile-card-loc__icon">
                                <svg class="icon">
                                  <use xlinkHref="#icon-location"></use>
                                </svg>
                              </span>

                              <span class="profile-card-loc__txt">
                                {item.city}, {item.country}
                              </span>
                            </div>

                            <div class="profile-card-inf">
                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.age}
                                </div>
                                <div class="profile-card-inf__txt">Age</div>
                              </div>

                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.height}
                                </div>
                                <div class="profile-card-inf__txt">Height</div>
                              </div>

                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.caste}
                                </div>
                                <div class="profile-card-inf__txt">Caste</div>
                              </div>

                              <div class="profile-card-inf__item">
                                <div
                                  class="profile-card-inf__title"
                                  style={{
                                    color:
                                      item.proposal_status === "Open"
                                        ? "green"
                                        : "red",
                                  }}
                                >
                                  {item.proposal_status}
                                </div>
                                <div class="profile-card-inf__txt">
                                  Proposal Status
                                </div>
                              </div>
                              {show
                                ? showID === item.id && (
                                    // <div class="wrapper-show">
                                    // <div class="profile-card-show js-profile-card">
                                    // <div class="profile-card-inf">
                                    <>
                                      <div class="profile-card-inf__item">
                                        <div class="profile-card-inf__title">
                                          {item.qualifications}
                                        </div>
                                        <div class="profile-card-inf__txt">
                                          Qualification
                                        </div>
                                      </div>

                                      <div class="profile-card-inf__item">
                                        <div class="profile-card-inf__title">
                                          {item.religion}
                                        </div>
                                        <div class="profile-card-inf__txt">
                                          Religion
                                        </div>
                                      </div>

                                      <div class="profile-card-inf__item">
                                        <div class="profile-card-inf__title">
                                          {item.looking_for}
                                        </div>
                                        <div class="profile-card-inf__txt">
                                          Looking For
                                        </div>
                                      </div>
                                    </>

                                    // </div>
                                    // </div>
                                  )
                                : null}
                            </div>

                            <div class="profile-card-ctr">
                              <button class="profile-card__button button--blue js-message-btn">
                                Feedback {item.feedbacks}
                              </button>

                              <button
                                onClick={() => {
                                  setShow(!show);
                                  setShowID(item.id);
                                }}
                                class="profile-card__button button--orange"
                              >
                                {show
                                  ? showID === item.id && "View Less"
                                  : view}
                              </button>
                            </div>
                          </div>

                          <div class="profile-card-message js-message">
                            <form class="profile-card-form">
                              <div class="profile-card-form__container">
                                <textarea placeholder="Say something..."></textarea>
                              </div>

                              <div class="profile-card-form__bottom">
                                <button class="profile-card__button button--blue js-message-close">
                                  Send
                                </button>

                                <button class="profile-card__button button--gray js-message-close">
                                  Cancel
                                </button>
                              </div>
                            </form>

                            <div class="profile-card__overlay js-message-close"></div>
                          </div>
                        </div>
                      </div>

                      <svg hidden="hidden">
                        <defs>
                          <symbol id="icon-location" viewBox="0 0 32 32">
                            <title>location</title>
                            <path d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"></path>
                            <path d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"></path>
                          </symbol>
                        </defs>
                      </svg>
                    </div>
                    {/* {show
                    ? showID === item.id && (
                        <div class="wrapper-show">
                          <div class="profile-card-show js-profile-card">
                            <div class="profile-card-inf">
                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.qualifications}
                                </div>
                                <div class="profile-card-inf__txt">
                                  Qualification
                                </div>
                              </div>

                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.religion}
                                </div>
                                <div class="profile-card-inf__txt">
                                  Religion
                                </div>
                              </div>

                              <div class="profile-card-inf__item">
                                <div class="profile-card-inf__title">
                                  {item.looking_for}
                                </div>
                                <div class="profile-card-inf__txt">
                                  Looking For
                                </div>
                              </div> */}

                    {/* <div class="profile-card-inf__item">
                                    <div class="profile-card-inf__title">
                                      {item.is_available}
                                    </div>
                                    <div class="profile-card-inf__txt">
                                      Available
                                    </div>
                                  </div> */}
                    {/* </div>
                          </div>
                        </div>
                      )
                    : null} */}

                    {/* <div className="tinderCards__cardContainer">
                    <TinderCard
                      className="swipe hide-on-large-only"
                      onSwipe={onSwipe}
                      onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                      preventSwipe={["up", "down"]}
                      key={item.id}
                    >
                      <Tinder item={item} />
                    </TinderCard>
                  </div> */}
                  </>
                );
              })}
            {/* <div className="container" style={{ textAlign: "center" }}>
            <a
              className="purple darken-2 btn"
              alt="Show More"
              onClick={showMoreItems}
            >
              <i class="material-icons">arrow_downward</i>
            </a>
          </div> */}
          </Carousel>
        </>
      )}
    </>
  );
}

export default Card;
