import * as React from "react";

const GitHubSvg = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className={`stroke-current ${props.className ?? ""}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 21v-3c0-.63.15-1.96-.5-2.5 1.39-.13 2.48-.58 3.5-1.5s1.5-2.31 1.5-4.5c0-1.5-.25-2.5-1-3.5.29-.78.34-2 0-3-1.56 0-2.97 1.07-3.5 1.5-.39-.1-1.33-.5-3-.5s-2.61.4-3 .5C8.47 4.07 7.06 3 5.5 3c-.34 1-.29 2.22 0 3-.75 1-1 2-1 3.5 0 2.19.48 3.58 1.5 4.5s2.11 1.37 3.5 1.5c-.65.54-.5 1.87-.5 2.5v3"
    ></path>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 19c-1.41 0-2.84-.56-3.69-1.19-.84-.63-1.09-1.66-2.31-2.31"
    ></path>
  </svg>
);

export default GitHubSvg;
