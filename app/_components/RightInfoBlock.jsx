import React from "react";

const RightInfoBlock = () => {
  return (
    <div className="fixed bottom-0 right-4 max-lg:right-2 max-md:hidden flex flex-col items-center space-y-4">
      <p
        style={{ writingMode: "vertical-rl" }}
        className="text-sm my-1 mx-auto p-1 leading-2 text-info font-nippo-light"
      >
        jordanwang1995@gmail.com
      </p>
      <div className="w-[2px] h-24 bg-info" />
    </div>
  );
};

export default RightInfoBlock;
