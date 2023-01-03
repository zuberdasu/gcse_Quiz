import React, { useState, useEffect } from "react";
const Timer = (props) => {
  const [width, setWidth] = useState([100]);
  const progress = (timeleft, timetotal) => {
    setWidth((timeleft * width) / timetotal);

    if (timeleft > 0) {
      setTimeout(() => {
        progress(timeleft - 1, timetotal);
      }, 1000);
    } else {
      props.checkAnswersOnExpire();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      progress(100, 100);
    }, 1000);
  }, []);

  return (
    <>
      <h4>Time remaining</h4>
      <div id="progressBar">
        <div className="bar" style={{ width: `${width}%` }}></div>
      </div>
    </>
  );
};

export default Timer;
