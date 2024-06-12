import React from "react";

function Heading() {
  const date = new Date();              //creates a new date object representing the current date and time.
  const currentTime = date.getHours();  //retrieves the current hour (0-23).

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {        //Morning (before 12 PM)
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) { //Afternoon (12 PM to 6 PM)
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {                       //Evening/Night (after 6 PM)
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;
