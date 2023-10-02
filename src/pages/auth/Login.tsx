import React from "react";
import { GoogleLogin } from "react-google-login";

// Types
import { IAuth } from "types";

export default function Login({ clientId, changeUserProfile, changeLoading }: IAuth) {
  const responseGoogle = (response: any) => {
    if (response.accessToken) {
      console.log("Login successful!", response);
      changeUserProfile(response?.profileObj);

    } else {
      console.log("Login failed", response);
    }
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      onRequest={() => changeLoading(true)}
      isSignedIn={true}
    />
  );
}