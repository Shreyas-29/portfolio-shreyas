"use client";

import { getBlogs } from '@/graphql';
import { BlogProps } from '@/types';
import { useEffect, useState } from 'react';
import BlogList from '../contents/BlogList';
import Tags from '../contents/Tags';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import Searchbar from '../utils/Searchbar';
import SectionContainer from '../utils/SectionContainer';

const BlogSection = () => {

    const [searchQuery, setSearchQuery] = useState<string>('');
    const [blogs, setBlogs] = useState<BlogProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [filteredBlogs, setFilteredBlogs] = useState<BlogProps[]>([]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        const data = blogs?.map((item: any) => item.node);
        let a = blogs.some

        const filtered = data?.filter((blog: any) =>
            blog.title.toLowerCase().includes(query.toLowerCase()) ||
            // NOTE: we want to check if at least one category's name includes the query so we used some here
            blog.categories.some((category: any) =>
                category.name.toLowerCase().includes(query.toLowerCase())
            )
        );

        setFilteredBlogs(filtered);
    };

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const data = await getBlogs();
                setBlogs(data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        };

        fetchBlogs();
    }, []);


    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

                <Heading title="Blog" />

                <AnimationContainer customClassName="w-full flex flex-col mb-8">
                    <p className="text-base text-justify lg:text-center lg:leading-8 text-neutral-200">
                        Discover a digital playground where innovation meets imagination, turning ideas into living, breathing projects. Unleash the power of code and embark on a journey of crafted stories and captivating experiences.
                    </p>
                </AnimationContainer>

                <Searchbar
                    searchQuery={searchQuery}
                    handleSearch={handleSearch}
                />

                <Tags />

                <BlogList
                    blogs={blogs}
                    isLoading={isLoading}
                    searchQuery={searchQuery}
                    filteredBlogs={filteredBlogs}
                />

            </div>
        </SectionContainer>
    )
};

export default BlogSection
