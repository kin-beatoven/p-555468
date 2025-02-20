
import React from "react";

export const MagicPromptHeader = () => {
  return (
    <div className="justify-between items-center bg-[#242233] flex min-h-[53px] w-full flex-wrap px-5 max-md:max-w-full">
      <div className="self-stretch flex min-w-60 flex-col flex-1 shrink basis-7 my-auto max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc509f62a8574ecff99db4cb679c6b20706978d0eb92e65175db2915ab218f8a"
          className="aspect-[4.5] object-contain w-[126px] max-w-full"
          alt="Magic Prompt Logo"
        />
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-1 text-sm font-medium leading-none justify-center w-[465px] my-auto pl-4 pr-3 py-3 rounded-lg max-md:max-w-full text-[rgba(255,255,255,0.9)]">
        <div className="self-stretch my-auto">Fizz Campaign v1</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/797d4066fc13235ab6f0ea4a46d7c54f5acb9c8a3f798bbf060c7c8e87218286"
          className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          alt="Campaign Icon"
        />
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-5 text-xs font-normal whitespace-nowrap tracking-[0.12px] w-[444px] my-auto max-md:max-w-full text-[rgba(255,255,255,0.9)]">
        <div className="self-stretch w-[22px] my-auto">
          <div className="bg-[rgba(178,42,132,1)] w-full h-[22px] px-0.5 rounded-[50%] flex items-center justify-center text-white">
            A
          </div>
        </div>
      </div>
    </div>
  );
};
