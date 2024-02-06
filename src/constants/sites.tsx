import { site } from "@/type/types";
import React from "react";

export const sites: Record<
  site,
  { displayName: string; icon?: React.ReactNode }
> = {
  qiita: {
    displayName: "Qiita",
    icon: (
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3.75 18.75H7.5V15h3.75v-3.75H7.5V7.5h3.75V3.75h6.25v15z" />
      </svg>
    ),
  },
  zenn: {
    displayName: "Zenn",
    icon: (
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 4.5 2.5 8.5 6.5 10.5V12c0-4.5 3.5-8 8-8s8 3.5 8 8-3.5 8-8 8c-1.5 0-3-.5-4.25-1.25L7.5 24V22c3.5 0 6.5-3 6.5-6.5S11 9 7.5 9H6.5V7.5h1c3.5 0 6.5-3 6.5-6.5S11 0 7.5 0H6.5v1.5h1C10 1.5 11.5 3 11.5 5.5S10 9.5 7.5 9.5H6.5V8h1C10 8 12 6 12 3.5S10 0 7.5 0z" />
      </svg>
    ),
  },
  hatena: {
    displayName: "はてなブログ",
    icon: (
      <svg
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M18.5 0h-13C3.1 0 0 3.1 0 6.5v13C0 20.9 3.1 24 6.5 24h13c3.4 0 6.5-3.1 6.5-6.5v-13C25 3.1 21.9 0 18.5 0zM12 17.5L6.5 12l1.4-1.4L12 14.7l5.1-5.1 1.4 1.4L12 17.5z" />
      </svg>
    ),
  },
};
