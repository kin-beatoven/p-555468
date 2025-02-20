
import React from "react";

export const MagicPromptComposer = () => {
  return (
    <div className="w-full max-md:max-w-full text-[rgba(255,255,255,0.9)]">
      <h2 className="self-stretch w-full gap-[15px] text-base font-normal leading-none max-md:max-w-full">
        Start Here
      </h2>
      <div className="bg-[rgba(48,46,68,1)] w-full mt-5 px-5 rounded-[10px] max-md:max-w-full">
        <div className="flex w-full flex-col items-stretch justify-center py-5 rounded-[20px] max-md:max-w-full">
          <div className="flex w-full gap-2.5 font-normal flex-wrap max-md:max-w-full">
            <div className="flex min-w-60 items-center gap-2.5 text-sm">
              <button className="items-center bg-[rgba(255,255,255,0.10)] self-stretch flex min-h-[30px] gap-2.5 my-auto px-2.5 rounded-[10px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3ead35a46ef8989840bf64668a58fb05253cc9f4f476297f684fea95df5c948"
                  className="aspect-[1.18] object-contain w-[13px] stroke-[2px] stroke-white self-stretch shrink-0 my-auto"
                  alt="Add Audio"
                />
                <span>Add Audio*</span>
              </button>
              <button className="items-center bg-[rgba(255,255,255,0.10)] self-stretch flex min-h-[30px] gap-2.5 my-auto px-2.5 rounded-[10px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c00bdfd763eb950895303c8e90ae91e915a77f64855928624923dcea3e5894"
                  className="aspect-[1.5] object-contain w-[18px] fill-white self-stretch shrink-0 my-auto"
                  alt="Add Video"
                />
                <span>Add Video*</span>
              </button>
            </div>
            <div className="text-center text-[13px] leading-6">
              *You should own the rights to the media.
            </div>
          </div>
          <div className="border border-[color:var(--White-38,rgba(255,255,255,0.38))] flex min-h-[100px] w-full gap-2.5 text-sm font-normal mt-[15px] pb-10 rounded-[10px] border-solid max-md:max-w-full">
            <div className="min-w-60 w-full flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="items-center border-[color:var(--White-38,rgba(255,255,255,0.38))] flex w-full gap-1 flex-wrap px-5 py-[5px] rounded-[10px] border-0 border-solid max-md:max-w-full">
                <span className="leading-loose self-stretch my-auto">
                  I need
                </span>
                <input
                  type="text"
                  defaultValue="background"
                  className="self-stretch overflow-hidden whitespace-nowrap leading-loose my-auto px-[5px] py-0.5 border-[rgba(255,255,255,0.82)] border-b bg-transparent text-[rgba(255,255,255,0.9)]"
                />
                <span className="leading-loose self-stretch my-auto">
                  music for a
                </span>
                <input
                  type="text"
                  defaultValue="cooking tutorial"
                  className="self-stretch min-h-[26px] overflow-hidden my-auto px-[5px] py-1 border-[rgba(255,255,255,0.82)] border-b bg-transparent text-[rgba(255,255,255,0.9)]"
                />
                <span className="leading-loose self-stretch my-auto">
                  The pace should be
                </span>
                <input
                  type="text"
                  defaultValue="calm"
                  className="self-stretch bg-[rgba(255,255,255,0)] min-h-[26px] overflow-hidden whitespace-nowrap my-auto px-[5px] py-1 border-[rgba(255,255,255,0.82)] border-b text-[rgba(255,255,255,0.9)]"
                />
                <span className="leading-loose self-stretch my-auto">
                  and the piece should run
                </span>
                <input
                  type="text"
                  defaultValue="5"
                  className="self-stretch bg-[rgba(255,255,255,0)] overflow-hidden whitespace-nowrap my-auto p-[5px] border-[rgba(255,255,255,0.82)] border-b w-8 text-[rgba(255,255,255,0.9)]"
                />
                <span className="leading-loose self-stretch my-auto">
                  minutes. My preferred style is
                </span>
                <input
                  type="text"
                  defaultValue="acoustic."
                  className="self-stretch bg-[rgba(255,255,255,0)] min-h-[26px] overflow-hidden whitespace-nowrap my-auto px-[5px] py-1 border-[rgba(255,255,255,0.82)] border-b text-[rgba(255,255,255,0.9)]"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch gap-[15px] flex-wrap mt-[15px] max-md:max-w-full">
            <div className="flex min-w-60 items-center gap-2.5 text-[13px] font-normal text-right leading-6 flex-wrap h-full flex-1 shrink basis-5 max-md:max-w-full">
              <div className="self-stretch bg-[#242233] gap-2.5 my-auto px-3 py-0.5 rounded-[10px]">
                0/100 Words
              </div>
              <div className="self-stretch my-auto">
                Works best for 20-100 words.
              </div>
            </div>
            <button className="justify-center items-center bg-[rgba(46,218,118,0.90)] flex gap-[5px] text-sm text-black font-bold text-center uppercase w-[180px] p-2.5 rounded-[10px]">
              <span className="self-stretch my-auto">Compose Music</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59cb7af2cc6af444d3835e2ebb273d92798c5fa772dbcd42f6936c8b61cf7ec7"
                className="aspect-[0.96] object-contain w-[23px] self-stretch shrink-0 my-auto rounded-[20px]"
                alt="Compose Icon"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
