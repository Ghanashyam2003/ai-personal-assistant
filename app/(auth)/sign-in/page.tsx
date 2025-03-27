"use client";
import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import React from "react";

function SignIn() {
  // Define authorization URL (example placeholder, update as needed)
  const authorizationURL = "https://your-authorization-url.com";

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log(tokenResponse);
      const userInfo = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers: { Authorization: "Bearer " + tokenResponse.access_token } }
      );
      console.log(userInfo);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div className="flex flex-col items-center gap-5 rounded-2xl p-10 shadow-md">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        <h2 className="text-2xl">Sign In to AI Personal Assistant</h2>

        {/* Updated button functionality */}
        <Button onClick={() => googleLogin()}>Sign in with Gmail</Button>
      </div>
    </div>
  );
}

export default SignIn;
