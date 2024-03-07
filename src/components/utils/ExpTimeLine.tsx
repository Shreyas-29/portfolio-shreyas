import { cn } from '@/lib/utils';
import { TimelineItemProps } from '@/types';
import React from 'react';
import AnimationContainer from './AnimationContainer';

export const TimeLine = ({ children }: { children: React.ReactNode }) => {
    return (
        <AnimationContainer customClassName="w-full py-12 lg:py-16">
            <div className="flex justify-center mb-2 md:justify-start">
                <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                    Experience
                </h2>
            </div>

            {children}

        </AnimationContainer>
    )
};

export const TimeLineItem = ({ active, children, last }: TimelineItemProps) => {
    return (
        <div
            className={cn(
                "w-full flex justify-start gap-6 border-neutral-800",
                !last && "border-l pb-16",
            )}
        >
            <div className="relative">
                <div
                    className={cn(
                        "w-4 h-4 rounded-full absolute -top-0.5 -left-2 outline-neutral-900",
                        active && "bg-blue-600",
                        !active && "bg-neutral-800 w-3 h-3 left-[-5.5px]",
                    )}
                >
                    {active && (
                        <div className="top-0 left-0 w-4 h-4 rounded-full -z-10 bg-blue-600 animate-ping" />
                    )}

                </div>
            </div>
            <div className="flex flex-col gap-2 -mt-1">
                {children}
            </div>
        </div>
    )
};

const TimeLineItemTitle = ({ children }: { children: React.ReactNode }) => <p className="text-white text-medium">
    {children}
</p>;

const TimeLineItemDescription = ({ children }: { children: React.ReactNode }) => <p className="text-base text-neutral-200">
    {children}
</p>;

TimeLineItem.Title = TimeLineItemTitle;
TimeLineItem.Description = TimeLineItemDescription;
