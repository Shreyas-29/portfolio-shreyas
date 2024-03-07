"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { motion } from 'framer-motion';
import { SiAmazonaws, SiExpo, SiFramer, SiIonic, SiMui, SiPostgresql, SiReactquery, SiRedis, SiSocketdotio, SiTrpc } from "react-icons/si";

const AllLearningTechs = () => {

    const animation = {
        hide: { x: -8, opacity: 0 },
        show: { x: 0, opacity: 1 }
    };

    return (
        <>
            <motion.p
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.2 }}
                className="mb-3 text-base text-center text-neutral-300 lg:text-start"
            >
                I am currently working or interested in learning:
            </motion.p>

            <TooltipProvider delayDuration={0}>
                <motion.ul
                    initial="hide"
                    animate="show"
                    transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
                    className="flex flex-wrap items-center justify-center gap-5 mx-auto lg:mx-0"
                >
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#0081CB]">
                                    <SiMui className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Material UI</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#1F1F1F]">
                                    <SiFramer className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Framer Motion</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#FFF]">
                                    <SiSocketdotio className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Socket.io</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#00BFFF]">
                                    <SiTrpc className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>TRPC</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#FF4154]">
                                    <SiReactquery className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>React Query</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#FFF]">
                                    <SiExpo className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Expo</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#3880FF]">
                                    <SiIonic className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Ionic</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#336791]">
                                    <SiPostgresql className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Postgresql</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#DC382D]">
                                    <SiRedis className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Redis</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                    <motion.li
                        variants={animation}
                        className="opacity-100"
                    >
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-neutral-700 hover:text-[#FF9900]">
                                    <SiAmazonaws className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>AWS</p>
                            </TooltipContent>
                        </Tooltip>
                    </motion.li>
                </motion.ul>
            </TooltipProvider>
        </>
    )
};

export default AllLearningTechs
