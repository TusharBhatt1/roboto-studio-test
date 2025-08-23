import React from "react";
import Image from "next/image";
import { Button } from "@/app/components/ui.tsx/Button";
import { urlFor } from "@/app/sanity/lib";
import { Showcase } from "@/app/sanity/types";

export function ShowcaseCard({
    _key,
    title,
    description,
    image,
    aspectRatio = "9/16",
    ctas,
}: Showcase) {
    return (
        <div
            key={_key}
            className="flex sm:flex-row flex-col max-w-4xl mx-auto sm:gap-14 gap-8 items-center justify-between sm:my-7 my-5 text-center p-4 sm:p-12"
        >
            <div className="space-y-3 flex-1">
                <p className="text-xl sm:text-3xl">{title}</p>
                <p>{description}</p>
                <div className="flex flex-col gap-3">
                    {ctas.map((cta) => (
                        <Button key={cta.text} title={cta.text} href={cta.href} />
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full">
                <Image
                    className={`aspect-[${aspectRatio}]`}
                    src={urlFor(image).url()}
                    alt={description}
                    height={700}
                    width={500}
                />
            </div>
        </div>
    );
}
