"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Markdown from "react-markdown";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

export default function TestimonialCard({testimonial}) {
    const { theme } = useTheme();

    return (
        <Card
            className={
                "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            }
        >
            <CardHeader className="px-4 pt-4">
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">
                        {testimonial.quote}
                    </p>
                </div>
            </CardHeader>
            <CardContent className="mt-auto flex flex-col px-4 pt-2">
                <div className="flex items-center mb-1">
                    {[...Array(5)].map((star, index) => (
                        <svg
                            key={index}
                            className="w-4 h-4 text-yellow-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.367 4.21a1 1 0 00.95.69h4.428c.969 0 1.372 1.24.588 1.81l-3.59 2.606a1 1 0 00-.364 1.118l1.368 4.21c.3.921-.755 1.688-1.54 1.118L10 14.347l-3.59 2.607c-.785.57-1.84-.197-1.54-1.118l1.368-4.21a1 1 0 00-.364-1.118L2.283 9.637c-.785-.57-.38-1.81.588-1.81h4.428a1 1 0 00.95-.69l1.367-4.21z"/>
                        </svg>
                    ))}
                </div>
                <Link href={testimonial.link} className="my-2">
                <div className="flex items-center">
                    <Avatar className="size-14 border mr-2">
                      <AvatarImage alt={testimonial.name} src={testimonial.imageUrl} />
                      <AvatarFallback>{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-base font-bold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                </div>
                </Link>
            </CardContent>
        </Card>
    );
};