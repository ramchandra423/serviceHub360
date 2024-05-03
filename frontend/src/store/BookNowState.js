import React, { useState } from "react";
import BookNowContext from "./BookNowContext";
export const BoookNowState = (props) => {
  const [service, setService] = useState({});
  return (
    <BookNowContext.Provider value={{ service, setService }}>
      {props.children}
    </BookNowContext.Provider>
  );
};
