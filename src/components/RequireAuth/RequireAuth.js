import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../utilities/firebase";
import Loading from "../Loading/Loading";
const customIdError = "custom id for auth";
const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading />;
  } else if (error) {
    toast.error(error?.message, {
      toastId: customIdError,
    });
  }
  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/logIn" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAuth;
