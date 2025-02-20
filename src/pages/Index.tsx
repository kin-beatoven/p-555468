import React from "react";
import { MagicPromptHeader } from "@/components/magic-prompt/MagicPromptHeader";
import { MagicPromptSidebar } from "@/components/magic-prompt/MagicPromptSidebar";
import { MagicPromptComposer } from "@/components/magic-prompt/MagicPromptComposer";
import { MagicPromptSamples } from "@/components/magic-prompt/MagicPromptSamples";
import { MagicPromptRecent } from "@/components/magic-prompt/MagicPromptRecent";
import { MagicPromptFooter } from "@/components/magic-prompt/MagicPromptFooter";

const Index = () => {
  return (
    <div className="bg-[#15141E] flex flex-col overflow-hidden items-stretch pb-[18px] text-[rgba(255,255,255,0.9)]">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <MagicPromptHeader />
        <div className="z-10 mt-[-53px] mb-[-392px] max-md:max-w-full max-md:mb-2.5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[16%] max-md:w-full max-md:ml-0">
              <MagicPromptSidebar />
            </div>
            <div className="w-[84%] ml-5 max-md:w-full max-md:ml-0">
              <main className="mt-20 max-md:max-w-full max-md:mt-10">
                <MagicPromptComposer />
                <MagicPromptSamples />
                <MagicPromptRecent />
              </main>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-[338px] max-md:mt-10">
        <MagicPromptFooter />
      </footer>
    </div>
  );
};

export default Index;
