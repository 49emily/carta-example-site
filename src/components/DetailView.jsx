import React from "react";
import Rating from "./Rating";

function DetailView(props) {
  return (
    <div>
      <img
        className="close"
        onClick={() => props.close()}
        src={require("../images/icons8-close-500.png")}
        alt="close"
      />
      <h1 className="detailTitle"> {props.details.title} </h1>
      <div className="detailView">
        <h2> Past Classes </h2>
        <div className="ratingGrid">
          {props.details.ratings.map((rating) => {
            return (
              <Rating
                key={rating.term.id + rating.instructor_name}
                profDetails={rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailView;
