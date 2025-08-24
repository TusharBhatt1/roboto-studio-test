import React from "react";
import Image from "next/image";
import { urlFor } from "@/app/sanity/lib";
import { Showcase } from "@/app/sanity/types";
import Link from "next/link";

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
            className={`flex sm:flex-row flex-col space-y-7 items-center justify-evenly text-center p-4 sm:p-12 bg-roboto-secondary-background ${className ? className : ""}`}
        >
            <div className="space-y-4  max-w-96">
                <p className="text-xl sm:text-3xl">{title}</p>
                <p>{description}</p>
                <div className="flex flex-col gap-3">
                    {ctas.map(({ href, text },i) => (
                        <Link key={`${text}-${i}`} href={href} className="text-roboto-secondary-gray border-2 border-roboto-secondary-gray">
                            {text}
                        </Link>
                    ))}
                </div>
            </div>
            <div className="max-w-96 flex justify-center">
                <Image
                    src={urlFor(image).url()}
                    alt={description}
                    height={700}
                    width={500}
                    loading="lazy"
                />
            </div>
        </div>
    );
}
