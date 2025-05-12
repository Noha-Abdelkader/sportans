import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80dvh]">
      <Image
        src="https://c8.alamy.com/comp/2SFE127/404-error-vector-icon-design-illustration-2SFE127.jpg"
        alt="not found"
        width={200}
        height={200}
      />
    </div>
  );
}
