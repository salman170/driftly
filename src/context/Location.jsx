import { createContext, useState } from "react";

export const LocationContext = createContext(null);

export const LocationProvider = (props) => {
  const [loc, setLoc] = useState("");
  const [openLoc, setOpenLoc] = useState(true);
  return (
    <LocationContext.Provider value={{ loc, setLoc, openLoc, setOpenLoc }}>
      {props.children}
    </LocationContext.Provider>
  );
};
