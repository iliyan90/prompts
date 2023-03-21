import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [users, setUsers] = useState();

  // select model from navbar
  const [selectedModel, setSelectedModel] = useState("All");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("./dataApi.json");
        const resData = await res.json();
        setData(resData.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const fetchUser = async () =>{
      try {
        const res = await fetch('./dataApi.json');
        const resUser = await res.json();
        setUsers(resUser.users);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser();

  }, []);

  return <ApiContext.Provider value={{ data, users,selectedModel, setSelectedModel }}>{children}</ApiContext.Provider>;
};

export default ApiContextProvider;
