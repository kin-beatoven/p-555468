import React from "react";

export const MagicPromptSamples = () => {
  return (
    <div className="flex w-full flex-col items-stretch text-[#010101] font-normal mt-[50px] max-md:max-w-full max-md:mt-10">
      <div className="w-full max-md:max-w-full">
        <h2 className="text-base">Magic Prompts</h2>
        <p className="text-sm leading-none mt-[15px] max-md:max-w-full">
          Prompt ideas for your content to get you started. Select your content
          type and edit the sample prompt to fit your needs.
        </p>
      </div>
      <div className="flex gap-[15px] text-sm leading-none flex-wrap mt-5 max-md:max-w-full">
        <button className="bg-[rgba(69,67,87,1)] overflow-hidden px-5 py-2.5 rounded-[10px]">
          Short Film
        </button>
        <button className="bg-[rgba(69,67,87,1)] overflow-hidden px-5 py-2.5 rounded-[10px]">
          YouTube Video
        </button>
        <button className="bg-[rgba(69,67,87,1)] overflow-hidden whitespace-nowrap px-5 py-2.5 rounded-[10px]">
          Podcast
        </button>
        <button className="bg-[rgba(69,67,87,1)] overflow-hidden px-5 py-2.5 rounded-[10px]">
          Game Design
        </button>
      </div>
    </div>
  );
};
