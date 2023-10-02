import React, { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { gapi } from "gapi-script";

// Pages
import GoogleAuth from "./pages/GoogleAuth";

// Replace with your actual client ID
const clientId: string = process.env.CLIENT_ID || "";

export default function App() {
  useEffect(() => {
    function start() {
      console.log(clientId);
      
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
