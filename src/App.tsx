import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { gapi } from "gapi-script";

// Pages
import GoogleAuth from "./pages/GoogleAuth";

// Replace with your actual client ID
const clientId: string = "233027103740-m9d0gsge8o59nfshelip0qd4otf0sh4u.apps.googleusercontent.com";

export default function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load('client:auth2', start);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoogleAuth />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
