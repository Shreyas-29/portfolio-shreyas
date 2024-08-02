"use client";

import { FaGithub } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiMiniDocumentText } from "react-icons/hi2";
import { IoBook, IoBriefcase, IoBrowsers, IoDocumentText, IoMail, IoPerson } from "react-icons/io5";
import { Button } from './ui/Button';
import MotionButton from './ui/MotionButton';
import AnimationContainer from './utils/AnimationContainer';

const Footer = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/me.pdf';
        link.download = 'me.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <footer className="flex flex-col items-center justify-center w-full mx-auto lg:max-w-screen-md">

            <hr className="w-full h-px border border-neutral-900" />

            <AnimationContainer customClassName="w-full grid grid-cols-3 place-items-center gap-2 lg:gap-4 mx-4 py-12 lg:py-8">

                <div className="flex flex-col space-y-4">

                    <MotionButton href="/" delay={0}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <GoHomeFill className="inline-block w-5 h-5 mr-2" />
                            Home
                        </Button>
                    </MotionButton>

                    <MotionButton href="/about" delay={0.5}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <IoPerson className="inline-block w-5 h-5 mr-2" />
                            About
                        </Button>
                    </MotionButton>

                    <MotionButton href="/projects" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <IoBrowsers className="inline-block w-5 h-5 mr-2" />
                            Projects
                        </Button>
                    </MotionButton>

                </div>

                <div className="flex flex-col space-y-4">

                    <MotionButton href="/blog" delay={0}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <IoBook className="inline-block w-5 h-5 mr-2" />
                            Blog
                        </Button>
                    </MotionButton>

                    <MotionButton href="/contact" delay={0.5}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <IoMail className="inline-block w-5 h-5 mr-2" />
                            Contact
                        </Button>
                    </MotionButton>

                    <MotionButton href="/notes" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <HiMiniDocumentText className="inline-block w-5 h-5 mr-2" />
                            Notes
                        </Button>
                    </MotionButton>
                </div>

                <div className="flex flex-col h-full space-y-4">

                    <MotionButton href="https://github.com/Shreyas-29" target="_blank" delay={0}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <FaGithub className="inline-block w-5 h-5 mr-2" />
                            GitHub
                        </Button>
                    </MotionButton>

                    <MotionButton href="https://www.linkedin.com/in/shreyas-sihasane-441b95238" target="_blank" delay={0.5}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70">
                            <IoBriefcase className="inline-block w-5 h-5 mr-2" />
                            LinkedIn
                        </Button>
                    </MotionButton>

                    <MotionButton href="#" delay={1} target="_blank" download>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-neutral-200 hover:opacity-70" onClick={handleDownload}>
                            <IoDocumentText className="inline-block w-5 h-5 mr-2" />
                            My CV
                        </Button>
                    </MotionButton>

                </div>

            </AnimationContainer>

        </footer>
    )
};

export default Footer
