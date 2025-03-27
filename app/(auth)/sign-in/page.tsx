"use client";
import { Button } from "@/components/ui/button";
import { GetAuthUserData } from "@/services/globalApi";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Image from "next/image";
import React from "react";

function SignIn() {
  // Define authorization URL (example placeholder, update as needed)
  const authorizationURL = "https://your-authorization-url.com";

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (typeof window !== undefined) {
        localStorage.setItem("user_token", tokenResponse.access_token);
      }
      const user = GetAuthUserData(tokenResponse.access_token);
      console.log(user);
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
