"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Redirect to login page if unauthenticated
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    // Show loading state until session status is determined
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg text-gray-700 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold text-green-500">Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mt-4">
        You are logged in and can access all features.
      </p>
    </div>
  );
}
