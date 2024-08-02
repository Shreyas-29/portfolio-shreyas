import React from 'react';
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine';

const Experience = () => {
    return (
        <TimeLine>
            <TimeLineItem active>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Frontend Developer at Polymath AI
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        June 2024 - Present
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    Working as a frontend developer at Polymath AI, contributing to innovative solutions in the AI space.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Backend Developer (Freelance) at Saman Technosys
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        Oct 2023 - Nov 2023
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    Developed scripts with Node.js to get scrap data of profiles and store in excel.
                </TimeLineItem.Description>
            </TimeLineItem>
        </TimeLine>
    );
};

export default Experience;
