"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function LoginPage() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex">
        Signed in as {session.user.email} <br />
        <Image
          className="rounded-full"
          src={session?.user?.image}
          alt="Profile"
          height={60}
          width={60}
        />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      {!session ? (
        <button onClick={() => signIn("github")}>Sign in with GitHub</button>
      ) : (
        <>
          <p>Welcome, {session.user.name}!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
