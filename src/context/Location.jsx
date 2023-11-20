import React, { createContext, useState, useEffect } from "react";

export const LocationContext = createContext(null);

export const LocationProvider = (props) => {
  const [loc, setLoc] = useState("Hyderabad");
  const [openLoc, setOpenLoc] = useState(false); // Set to false initially

  useEffect(() => {
    // Set openLoc to true after 5000 milliseconds (5 seconds)
    const timeoutId = setTimeout(() => {
      setOpenLoc(true);
    }, 5000);

    // Clear the timeout on component unmount (cleanup)
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <LocationContext.Provider value={{ loc, setLoc, openLoc, setOpenLoc }}>
      {props.children}
    </LocationContext.Provider>
  );
};
