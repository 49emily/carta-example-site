import React from "react";

function Rating(props) {
  const {
    instructor_name,
    term: { season, start_year, end_year },
    average_rating,
    num_ratings
  } = props.profDetails;
  return (
    <div className="rating">
      <div>
        <h3> {instructor_name} </h3>
      </div>
      <div>
        {season} {start_year}-{end_year}{" "}
      </div>
      <div>
        {average_rating}/5.0 out of {num_ratings} ratings
      </div>
    </div>
  );
}

export default Rating;
