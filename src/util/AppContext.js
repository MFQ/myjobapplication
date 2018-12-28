import React from "react";

const hostname = `${process.env.REACT_APP_API_SERVER}`;
const AppContext = React.createContext({ hostname });

export default AppContext;
