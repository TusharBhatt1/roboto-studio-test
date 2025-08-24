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
    ctas,
    className
}: Showcase) {
    return (
        <div
            key={_key}
            className={`flex sm:flex-row flex-col sm:gap-14 gap-8 items-center justify-between sm:py-7 py-5 text-center p-4 sm:p-12 bg-roboto-secondary-background ${className ? className : ""}`}
        >
            <div className="space-y-4 flex-1">
                <p className="text-xl sm:text-3xl">{title}</p>
                <p>{description}</p>
                <div className="flex flex-col gap-3">
                    {ctas.map((cta) => (
                        <Button key={cta.text} title={cta.text} href={cta.href} />
                    ))}
                </div>
            </div>
            <div className="flex-1 w-full flex justify-center">
                <Image
                    src={urlFor(image).url()}
                    alt={description}
                    height={700}
                    width={500}
                    loading="lazy"
                    className="w-96"
                />
            </div>
        </div>
    );
}
