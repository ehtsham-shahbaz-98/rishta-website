import React from "react";

import "../assets/css/CardsSmall.scss";
import "../assets/css/TinderCards.scss";

function Tinder({ item }) {
  const url = "https://shadiregistrar.com/";

  return (
    <>
      <div className="newTindercardbody">
        <main class="newTindercardcontainer">
          <div class="newTindercard">
            <img
              src={url + item.avatar_url}
              alt="User image"
              class="newTindercard__image"
            />
            <div class="newTindercard__text">
              <h2>Rishta ID: {item.id}</h2>
              <p>{item.marital_status}</p>
            </div>
            <ul class="newTindercard__info">
              <li>
                <span class="newTindercard__info__stats">{item.age}</span>
                <span>Age</span>
              </li>
              <li>
                <span class="newTindercard__info__stats">{item.height}</span>
                <span>Height</span>
              </li>
              <li>
                <span class="newTindercard__info__stats">{item.id}</span>
                <span>ID</span>
              </li>
            </ul>
            <div class="newTindercard__action">
              <button class="newTindercard__action__button newTindercard__action--follow ">
                Feedback {item.feedbacks}
              </button>
              <button class="newTindercard__action__button newTindercard__action--message">
                View More
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Tinder;
