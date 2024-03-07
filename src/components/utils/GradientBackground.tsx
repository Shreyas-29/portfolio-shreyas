"use client";

import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import AnimationContainer from './AnimationContainer';

const GradientBackground = ({ children }: { children: React.ReactNode }) => {

    const controls = useAnimation();

    useEffect(() => {
        let animationCancelled = false;

        const startAnimation = async () => {
            while (!animationCancelled) {
                await controls.start({
                    x: [0, 80, 0, -80, 0],
                    y: [0, -80, 0, 80, 0],
                    transition: { duration: 8, repeat: Infinity },
                });
            }
        };

        startAnimation();

        // Cleanup function to stop animation when the component is unmounted
        return () => {
            animationCancelled = true;
            controls.stop();
        };
    }, [controls]);

    return (
        <AnimationContainer>
            <div className="min-h-screen w-full bg-[#080809]">

                <div className="absolute inset-0 z-[20] bg-grid-neutral-600/20 hidden lg:flex"></div>

                <div className="absolute z-[20] inset-0 items-center justify-center bg-[#080809] [mask-image:radial-gradient(ellipse_at_center,transparent_5%,black)] hidden lg:flex"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    animate={controls}
                    className="bg-sky-500/30 z-[15] w-[30rem] left-[45%] top-[5rem] absolute h-[18rem] blur-[11rem] rounded-full hidden lg:flex"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                    animate={controls}
                    className="bg-violet-500/30 z-[15] absolute w-[30rem] right-[45%] top-[5rem] h-[18rem] mt-[5rem] blur-[11rem] rounded-full hidden lg:flex"
                />

                {children}

            </div>
        </AnimationContainer>
    )
};

export default GradientBackground
