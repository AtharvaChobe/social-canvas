import React from 'react'
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Tweet_hero = () => {
    const words = [
        {
            text: "Convert",
        },
        {
            text: "any tweet",
        },
        {
            text: "into",
        },
        {
            text: "awesome",
        },
        {
            text: "Image.",
            className: "text-blue-500  dark:text-blue-500",
        },
    ];


    return (


        <div className="flex flex-col items-center justify-center h-[40vh]  ">
            <p className="text-neutral-600 mt-12 dark:text-neutral-200 text-xs sm:text-base  ">
                Increase your reach
            </p>
            <TypewriterEffectSmooth words={words} />
            {/* <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Signup
                </button>
            </div> */}
        </div>
    );
}

export default Tweet_hero