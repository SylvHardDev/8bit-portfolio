"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hello() {
  const [message, setMessage] = useState<boolean>(false);

  return (
    <div className="fixed bottom-0 right-0 w-32 md:w-64">
      {message && (
        <div className="nes-balloon from-right w-36 relative right-6 md:w-44">
          <p className="text-xs text-black">Hello sang de bourbe!</p>
        </div>
      )}
      <Image
        onMouseEnter={() => setMessage(true)}
        onMouseLeave={() => setMessage(false)}
        src={"/pixel-orc.webp"}
        width={300}
        height={300}
        alt="Orc who says Hello"
      />
    </div>
  );
}
