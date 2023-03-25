import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthProvider from "../Rutas/AutProvider";

import { logout } from "../../Firebase/Firebase";

export default function SignOut() {
  useEffect(() => { }, []);
  const navigate = useNavigate();

  return (
    <AuthProvider
      onUserLoggedIn={async () => {
        await logout();
        navigate("/login");
      }}
      onUserNotLoggedIn={() => {
        navigate("/login");
      }}
    ></AuthProvider>
  );
}