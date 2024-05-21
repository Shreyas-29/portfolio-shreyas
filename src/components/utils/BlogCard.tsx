"use client";

import { BlogProps, CategoryProps } from '@/types';
import { Badge } from '@mantine/core';
import moment from 'moment';
import Link from 'next/link';
import AnimationContainer from './AnimationContainer';

interface Props {
    blog: BlogProps;
}

const BlogCard = ({ blog }: Props) => {
    return (
        <AnimationContainer key={blog.title} customClassName="w-full">
            <div className="flex flex-col w-full items-start px-3 py-2 md:px-6 border border-border rounded-md md:rounded-lg md:py-4 overflow-hidden relative transition ease-out">
                <div className="flex items-center justify-between w-full">
                    <h2 className="text-lg font-medium text-neutral-200 hover:text-white lg:text-xl">
                        <Link href={`/blog/${blog?.slug}`}>
                            {blog?.title}
                        </Link>
                    </h2>
                    <span className="hidden md:inline-block text-sm text-neutral-200 text-end">
                        {moment(blog?.publishedAt).fromNow()}
                    </span>
                </div>
                <div className="space-y-3 mt-3">
                    <div className="flex items-center flex-wrap gap-2 justify-start">
                        <p className="text-sm text-neutral-300 whitespace-pre-line text-wrap truncate text-justify w-full">
                            {blog?.description && blog?.description?.substring(0, 200)}...
                        </p>
                        {blog?.categories?.map((category: CategoryProps) => (
                            <Badge
                                key={category?.name}
                                size="md"
                                radius="sm"
                                variant="filled"
                                color="dark"
                                className="bg-zinc-600 hover:bg-neutral-700 transition-colors duration-300 ease-in-out"
                            >
                                <span className="font-medium text-white">
                                    {category?.name}
                                </span>
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
        </AnimationContainer>
    )
};

export default BlogCard
