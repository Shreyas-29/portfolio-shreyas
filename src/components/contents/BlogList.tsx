"use client";

import { BlogProps } from '@/types';
import { Skeleton } from '../ui/Skeleton';
import BlogCard from '../utils/BlogCard';

interface Props {
    blogs: BlogProps[];
    isLoading: boolean;
    searchQuery: string;
    filteredBlogs: BlogProps[];
}

const BlogList = ({ blogs, isLoading, searchQuery, filteredBlogs }: Props) => {

    const data = blogs?.map((item: any) => item.node);

    return (
        <div className="flex flex-col gap-5 items-center mt-5 w-full">

            {isLoading ? (
                <>
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-full h-32" />
                    <Skeleton className="w-full h-32" />
                </>
            ) : (
                <>
                    {searchQuery && filteredBlogs?.length > 0 ? (
                        filteredBlogs?.map((blog: BlogProps) => (
                            <BlogCard key={blog.title} blog={blog} />
                        ))
                    ) : (
                        data && data?.map((blog: BlogProps) => (
                            <BlogCard key={blog.title} blog={blog} />
                        ))
                    )}
                </>
            )}

        </div>
    )
};

export default BlogList
