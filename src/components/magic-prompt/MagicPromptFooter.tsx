
import React from "react";

export const MagicPromptFooter = () => {
  return (
    <div className="justify-center items-center bg-[rgba(21,20,30,0.82)] flex gap-[15px] text-xs font-medium text-center mr-[34px] p-1.5 rounded-[14px] max-md:mr-2.5 text-[rgba(255,255,255,0.9)]">
      <button className="self-stretch flex items-center gap-1 justify-center my-auto rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bd15ee08a39d775e0703917893ab505b9372d585706de25609f274e98bda232"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Bug Report Icon"
        />
        <span className="self-stretch my-auto">Report Bug</span>
      </button>
      <button className="self-stretch flex items-center gap-1 justify-center my-auto rounded-lg">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fbe308f0c2e7dc66ff5524f19f4386a2d92186cd07d8565dbf2acccd59dc696"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
          alt="Chat Icon"
        />
        <span className="self-stretch my-auto">Chat with us</span>
      </button>
    </div>
  );
};
