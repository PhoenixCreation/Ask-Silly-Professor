import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user.username) {
      console.log("true");
      setIsLoggedIn(true);
    } else {
      console.log("false");
      setIsLoggedIn(false);
    }
  }, [user]);

  const login = (username, password) => {
    setUser({ username, password });
  };

  const signup = (username, password) => {
    if (
      username !== "" ||
      username !== null ||
      password !== "" ||
      password !== null
    ) {
      setUser({ username, password });
    } else {
      setUser({});
    }
  };

  const logout = () => {
    setUser({});
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, login, signup, logout, isLoggedIn }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
