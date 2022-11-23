import React, { Component, useState, useEffect } from "react";
const Timer = () => {
  const [width, setWidth] = useState([100]);
  const progress = (timeleft, timetotal) => {
    setWidth((timeleft * width) / timetotal);
    // var progressBarWidth = (timeleft * $element.width()) / timetotal;
    //$element
    //  .find("div")
    //   .animate({ width: progressBarWidth }, 500)
    //   .html(Math.floor(timeleft / 60) + ":" + (timeleft % 60));
    //if (timeleft > 0) {
    setTimeout(() => {
      progress(timeleft - 1, timetotal);
      //console.log(progress, timeleft);
    }, 1000);
  };
  //};

  useEffect(() => {
    setTimeout(() => {
      progress(300, 300);
    }, 1000);

    //get initial data
    // const _dataController = new DataController();
    // _dataController.init();
    //<div className="bar" style={{ width: "50%" }}></div>
  }, []);

  return (
    <>
      <h4>Timer</h4>
      <div id="progressBar">
        <div className="bar" style={{ width: `${width}%` }}></div>
      </div>
    </>
  );
};

export default Timer;
