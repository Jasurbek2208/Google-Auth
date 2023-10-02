import React, { useState } from "react";

// Types
import { IUserProfile } from "types";

// Auth pages
import Login from "./auth/Login";
import Logout from "./auth/Loguot";

// Components
import Loader from "../components/Loader";

// Replace with your actual client ID
const clientId: string = "233027103740-m9d0gsge8o59nfshelip0qd4otf0sh4u.apps.googleusercontent.com";

export default function GoogleAuth() {
  const [userProfile, setUserProfile] = useState<IUserProfile>({
    email: "",
    familyName: "",
    givenName: "",
    googleId: "",
    imageUrl: "",
    name: "",
    loading: false,
  });

  function changeUserProfile(param: IUserProfile) {
    if (!param) {
      setUserProfile({
        email: "",
        familyName: "",
        givenName: "",
        googleId: "",
        imageUrl: "",
        name: "",
        loading: false,
      });
    } else {
      setUserProfile({ ...param, loading: false });
    }
  }

  function changeLoading(param: boolean) {
    setUserProfile((p: IUserProfile) => ({ ...p, loading: param }));
  }

  return (
    <div className="p-5 mt-12">
      <h1 className="text-3xl mb-6">Google Login Example</h1>
      <div className="flex gap-3 flex-wrap">
        <Login clientId={clientId} changeUserProfile={changeUserProfile} changeLoading={changeLoading} />
        <Logout clientId={clientId} changeUserProfile={changeUserProfile} changeLoading={changeLoading} />
      </div>
      {
      userProfile?.loading ? <Loader /> :
        userProfile?.imageUrl ?
            <div className="mt-16 flex flex-col justify-center items-left gap-2">
                <img className="rounded-full w-20 h-20 mb-2" src={userProfile?.imageUrl} alt={userProfile?.name} />
                <p className="text-base"><span className="font-bold">Name: </span> {userProfile?.givenName}</p>
                <p className="text-base"><span className="font-bold">Surname: </span> {userProfile?.familyName}</p>
                <p className="text-base"><span className="font-bold">Fullname: </span> {userProfile?.name}</p>
                <p className="text-base"><span className="font-bold">Email: </span> {userProfile?.email}</p>
                <p className="text-base"><span className="font-bold">Google ID: </span>{userProfile?.googleId}</p>
            </div>
        : <h1 className="mt-8">Login for get your google info.</h1>
      }
    </div>
  );
}