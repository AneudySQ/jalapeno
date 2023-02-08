
import React from 'react'
import AuthProvider from "../../../Firebase/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { existsUsername, updateUser } from "../../../Firebase/Firebase";


export default function ChooseUserNameView() {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");

  function handleUserLoggedIn(user) {
    navigate("/Dasboard");
  }

  function handleUserNotRegisted(user) {
    setCurrentUser(user);
    setState(3);
  }

  function handleUserNotLoggedIn() {
    navigate("/Login")
  }

  function hadleInputUsername(e) {
    setUsername(e.target.value);

  }

  async function handleContinue() {
    if (username !== "") {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser }
        tmp.username = username;
        tmp.processComplited = true;
        await updateUser(tmp);
      }

    }
  }





  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      OnUserNotRegisted={handleUserNotRegisted}
      onUserNotLoggedIn={handleUserNotLoggedIn}
    ></AuthProvider>
  );

}


