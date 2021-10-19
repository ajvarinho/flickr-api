import React, { useEffect } from "react";
import { useState } from "react";
import "./Container.css";


export default function Container({ photo, infavourites, toggleFavourite }) {
  const [hover, setHover] = useState(false);


  let id = photo.id;
  let path = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;

  const itemHover = () => {
    setHover(true);
  };

  const removeHover = () => {
    setHover(false);
  };


  function checkTitleLength(photo) {
    let title = photo.title;
    const split = title.split("", 40)
    if (split.length >= 100) {
      return "Title is too long"
    } else if (split.length === 0) {
      return "Untitled";
    } else {
      return split;
    }
  }

  return (
    <>
      <div
        onMouseEnter={itemHover}
        onMouseLeave={removeHover}
        className="img-container"
        id="container"
      >
        {hover && (
          <div className="overlay">
            <div className="overlay-menu">
              <h4 className="title">{checkTitleLength(photo)}</h4>
              <hr />
              <h4 className="author">{photo.owner}</h4>
              <div className="favourite">
                <button

                  onClick={() => toggleFavourite(photo)}
                >
                  FAVOURITE
                </button>
              </div>
            </div>
          </div>
        )}
        {infavourites && (
          <div className="overlay-favourite">
            <div className="favourite-img">
              <div>
                <button onClick={() => toggleFavourite(photo)} className="unfavourite">❤️</button>
              </div>
            </div>
          </div>
        )}
        <img className="img" src={`${path}`} key={id} alt={`${photo.title}`} />
      </div>
    </>
  );
}

