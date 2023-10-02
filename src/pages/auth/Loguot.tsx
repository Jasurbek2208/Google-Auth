import React from "react";
import { GoogleLogout } from "react-google-login";

// Types
import { IAuth } from "types";

export default function Logout({ clientId, changeUserProfile }: IAuth) {
  const onSuccess = () => {
    changeUserProfile(null);
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}