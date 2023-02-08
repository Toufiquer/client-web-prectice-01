import { Button } from "flowbite-react";
import React from "react";
import auth from "../../utilities/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
const customIdError = "custom-id-for-error";
const customIdSuccess = "custom-id-for-Success";
const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading />;
  } else if (error) {
    toast.error(error?.message, {
      toastId: customIdError,
    });
  } else if (user) {
    toast.success("Logged in successfully", {
      toastId: customIdSuccess,
    });
    navigate(from, { replace: true });
  }
  return (
    <div className={`min-h-screen w-full flex items-center justify-center`}>
      <Button onClick={() => signInWithGoogle()} className={`border-1 border-solid border-gray-400`} color="dark">
        Continue With Google
      </Button>
    </div>
  );
};

export default LogIn;
