"use client"
import React, { useEffect, useState } from "react";
import { CheckCircleIcon, SquareArrowOutUpRight } from "lucide-react";

const HighlightDialog = () => {
    const [isShow, setIsShow] = useState(true)


  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    if(!isShow) document.body.style.overflow = "auto";
    
  }, [isShow]);

    const points = [
        "Used best practices",
        "Reusable code",
        "Reduced image sizes to ~70% using Photopea",
        "Fixed inconsistent image sizes",
        "Subtle animation",
        "Promoted pnpm",
    ];

    if (!isShow) return null

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md z-50">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-lg animate-fadeIn">
                <h2 className="text-xl font-bold mb-4 text-center text-foreground">Built by Tushar Bhatt</h2>
                <ul className="space-y-2 text-foreground">
                    {points.map((point, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircleIcon className="size-5 text-green-500 flex-shrink-0" />
                            {point}
                        </li>
                    ))}
                </ul>

<p className="my-3 font-bold flex gap-1 items-center pl-2">
  Repo -{" "}
  <a
    className="text-sky-700 flex items-center gap-2 hover:underline"
    href="https://github.com/TusharBhatt1/roboto-studio-test"
    target="_blank"
    rel="noreferrer"
  >
    Roboto test <SquareArrowOutUpRight size={14} />
  </a>
</p>

                <div className="mt-4 text-center">
                    <button className="px-4 py-2 bg-foreground hover:bg-foreground/90 text-white cursor-pointer  rounded-lg" onClick={() => setIsShow(false)}>
                        Ok
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HighlightDialog;
