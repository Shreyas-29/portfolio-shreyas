import React from 'react'
import { TimeLine, TimeLineItem } from '../utils/ExpTimeLine'

const Experience = () => {
    return (
        <TimeLine>

            <TimeLineItem active>
                <TimeLineItem.Title >
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Software Developer
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        2024 - Present
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    I am a software developer at a company that does software development.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Web Developer
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        Aug 2021 - Feb 2023
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    I am a web developer at a company that does web development.
                </TimeLineItem.Description>
            </TimeLineItem>

            <TimeLineItem last>
                <TimeLineItem.Title>
                    <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
                        Android Developer
                    </span>
                    {" "}•{" "}
                    <span className="text-neutral-200">
                        May 2021 - Aug 2021
                    </span>
                </TimeLineItem.Title>
                <TimeLineItem.Description>
                    I am a android developer at a company that does android development.
                </TimeLineItem.Description>
            </TimeLineItem>

        </TimeLine>
    )
}

export default Experience
