"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();

  // Use effect to handle redirection when the session status is authenticated
  useEffect(() => {
    if (status === "authenticated") {
      // Redirect to the "/qc" route
      router.push("/qc");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading....</p>;
  }

  if (status === "authenticated") {
    return <button onClick={() => signOut("google")}>Logout</button>;
  }

  if (status === "unauthenticated") {
    return <p>User unauthenticated</p>;
  }

  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
