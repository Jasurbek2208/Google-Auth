import React from "react";
import { GoogleLogout } from "react-google-login";

// Types
import { IAuth } from "types";

export default function Logout({ clientId, changeUserProfile, disabled }: IAuth) {
  const onSuccess = () => {
    changeUserProfile(null);
  };

  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      disabled={disabled}
      onLogoutSuccess={onSuccess}
    />
  );
}