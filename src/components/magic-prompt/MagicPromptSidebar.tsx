import React from "react";

export const MagicPromptSidebar = () => {
  return (
    <div className="min-h-[850px] grow overflow-hidden text-sm text-[#010101] font-medium whitespace-nowrap tracking-[0.14px] pt-20 pb-[687px] px-5 border-[rgba(48,46,68,1)] border-r max-md:mt-6 max-md:pb-[100px]">
      <nav className="w-full max-w-[180px]">
        <div className="bg-[rgba(48,46,68,1)] flex w-full items-center gap-[15px] p-2.5 rounded-[10px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8d1ad8221186acc361d21514ac869b6ecbc0c2f4fe4d9b1e6daead43f8784f22"
            className="aspect-[1] object-contain w-[22px] self-stretch shrink-0 my-auto"
            alt="Home Icon"
          />
          <div className="self-stretch my-auto">Home</div>
        </div>
        <div className="flex w-full items-center gap-[15px] p-2.5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d08b5ea96c0c57ed61f6cb9ce2c62f0593945176443942aa0a41220d4d5b43c6"
            className="aspect-[1.05] object-contain w-[22px] self-stretch shrink-0 my-auto"
            alt="Projects Icon"
          />
          <div className="self-stretch my-auto">Projects</div>
        </div>
      </nav>
    </div>
  );
};
