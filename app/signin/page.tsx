"use client";
import { Button } from "@/components/ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import Image from "next/image";
import React from "react";

function SignIn() {
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      console.log(codeResponse);
      const tokens = await axios.post("http://localhost:3001/auth/google", {
        code: codeResponse.code,
      });

      console.log(tokens);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });
  return (
    <div className="flex items-center flex-col justify-center h-screen">
      <div
        className="flex flex-col items-center
      gap-5 rounded-2xl p-10 shadow-md"
      >
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        <h2 className="text-2xl">Sign In to AI Personal Assistant</h2>
        <Button onClick={googleLogin}>Sign in with Gmail</Button>
      </div>
    </div>
  );
}

export default SignIn;
