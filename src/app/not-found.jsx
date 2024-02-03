import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh]">
      <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
      <p className="text-lg text-gray-600">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className="mt-5 font-bold text-md hover:underline" href={"/"}>
        &#8592; Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
