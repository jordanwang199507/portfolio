import GitHubSvg from "@/public/assets/svg/GitHubSvg";
import LinkedInSvg from "@/public/assets/svg/LinkedInSvg";
import React from "react";

const LeftInfoBlock = () => {
  return (
    <div className="fixed bottom-0 left-4 max-lg:left-2 max-md:hidden flex flex-col items-center space-y-4">
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-info hover:text-font transition-colors duration-200"
      >
        <GitHubSvg />
      </a>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="text-info hover:text-font transition-colors duration-200"
      >
        <LinkedInSvg />
      </a>
      <div className="w-[2px] h-24 bg-info" />
    </div>
  );
};

export default LeftInfoBlock;
