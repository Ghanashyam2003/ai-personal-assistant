"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface ProviderProps {
  children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </GoogleOAuthProvider>
  );
}
