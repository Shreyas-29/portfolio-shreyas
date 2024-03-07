"use client";

import { getTags } from '@/graphql';
import { CategoryProps } from '@/types';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '../ui/Button';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';

const Tags = () => {

    const [tags, setTags] = useState<CategoryProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            const fetchTags = async () => {
                const data = await getTags();
                setTags(data);
                setIsLoading(false);
            };
            fetchTags();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, []);

    const data = tags?.map((item: any) => item.node);

    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
    };

    const MotionButton = motion(Button);

    return (
        <AnimationContainer customClassName="w-full mt-5">
            <div className="flex gap-3 flex-wrap flex-row items-center w-full">

                {isLoading ? (
                    <>
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                        <Skeleton className="w-20 h-8 mr-2 mb-2" />
                    </>
                ) : (
                    <>
                        {data && data?.map((tag: CategoryProps, index: number) => (
                            <MotionButton
                                key={index}
                                size="xs"
                                variant="outline"
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2, delay: index * 0.1 }}
                            >
                                {tag.name}
                            </MotionButton>
                        ))}
                    </>
                )}

            </div>
        </AnimationContainer>
    )
};

export default Tags
