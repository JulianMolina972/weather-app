import React, { createContext, useContext, useState, useEffect } from "react";


const APIContext = createContext({});


export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}onecall?lat=51.5023&lon=-0.1277&metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(weather => {
        setData(weather)
      })
      .catch(err => console.log(err))
  }, []);
  return (
    <APIContext.Provider value={data}>
      {children}
    </APIContext.Provider>
  )
};

export const useApi = () => {
  const context = useContext(APIContext);
  if (context  === undefined) {
    return "hey this doesn't work";
  }
  return context;
}