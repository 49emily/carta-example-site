import React, { useState } from "react";

function Course(props) {
  function handleClick() {
    props.whenClicked(props.details);
  }
  return (
    <div className="course" onClick={handleClick}>
      <h1>
        {props.details.course_codes.join(" / ")}: {props.details.title}
      </h1>
      <p className="unit">
        {props.details.max_units}{" "}
        {props.details.max_units === 1 ? "unit" : "units"}
      </p>
      <p className="description">
        {props.details.description.substring(0, 150)}...
      </p>
    </div>
  );
}
export default Course;
