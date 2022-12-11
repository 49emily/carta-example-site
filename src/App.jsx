import React, { useState, useEffect } from "react";
import "./styles.css";
import courses from "./courses";
import Course from "./components/Course";
import DetailView from "./components/DetailView";
/* import ReactCSSTransitionGroup from "react-transition-group"; */

function App() {
  const [isDetail, setIsDetail] = useState(false);
  const [detailedCourse, setDetailedCourse] = useState({});
  const [displayedCourses, setDisplayedCourses] = useState(courses);

  var inputText = "";

  function showDetailView(course) {
    setIsDetail(true);
    setDetailedCourse(course);
  }

  function hideDetailView() {
    setIsDetail(false);
  }

  function handleInput(event) {
    inputText = event.target.value;
    setDisplayedCourses(
      courses.filter((course) => {
        return (
          course.title.toLowerCase().includes(inputText.toLowerCase()) ||
          course.course_codes
            .join(" / ")
            .toLowerCase()
            .includes(inputText.toLowerCase())
        );
      })
    );
  }
  return (
    <div className="App">
      {isDetail ? (
        <DetailView key="1" close={hideDetailView} details={detailedCourse} />
      ) : (
        <div>
          <h1 className="title"> Stanford Courses</h1>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search for course title or code"
          />
          <div className="courseView">
            {displayedCourses.map((course) => {
              return (
                <Course
                  whenClicked={showDetailView}
                  key={course.id}
                  details={course}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
