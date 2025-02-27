import Link from "next/link";
import React from "react";

function Button() {
  return (
    <Link
      className="py-4 px-8 md:w-64 rounded text-white font-bold flex items-center justify-center bg-orange-main "
      href="/"
    >
      <span className="pr-4">Reach Out to Us</span>
      <svg
        width="6"
        height="9"
        viewBox="0 0 6 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
          fill="white"
        ></path>
      </svg>
    </Link>
  );
}

export default Button;
