import React from "react";
export const MagicPromptRecent = () => {
  return <div className="w-full font-normal mt-[50px] max-md:max-w-full max-md:mt-10 text-[rgba(255,255,255,0.9)]">
      <div className="flex w-full items-stretch gap-[30px] text-base leading-none max-md:max-w-full">
        <div className="self-stretch w-full min-w-60 gap-2.5 h-full flex-1 shrink max-md:max-w-full">
          <h2>Recent Projects</h2>
        </div>
      </div>
      <p className="leading-none mt-[15px] max-md:max-w-full text-sm font-light text-gray-400">
        You don't have projects yet! Start by composing a new music track.
      </p>
    </div>;
};