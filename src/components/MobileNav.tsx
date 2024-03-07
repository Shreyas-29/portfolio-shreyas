"use client";

import { links } from '@/lib/data';
import { AnimatePresence, motion } from 'framer-motion';
import { Squeeze as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';

const MobileNav = () => {

    const MotionButton = motion(Button);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            document.body.style.overflow = isOpen ? 'hidden' : 'auto';
        };

        // Set initial state on mount
        handleBodyOverflow();

        // Cleanup effect on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 flex w-full h-16 bg-black/20 backdrop-blur-md lg:hidden">
            <div className="relative flex items-center justify-between w-full px-5">

                <Link href="/">
                    <h2 className="text-lg font-semibold text-white">
                        Shreyas
                    </h2>
                </Link>

                <div className="relative flex z-[99999] items-center">
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        color="#fff"
                        direction='left'
                        distance='md'
                        size={20}
                        rounded
                    />
                </div>

                <AnimatePresence presenceAffectsLayout>
                    {isOpen && (
                        <motion.div
                            initial="closed"
                            animate={isOpen ? "open" : "closed"}
                            variants={variants}
                            transition={{
                                type: "spring",
                                bounce: 0.15,
                                duration: 0.5,
                            }}
                            className="fixed z-[9999] rounded-lg w-full h-screen inset-0 backdrop-blur-md bg-black"
                        >
                            <ul className="flex flex-col items-start w-full px-6 py-3 pt-16 space-y-3">
                                {links?.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{
                                            type: "spring",
                                            bounce: 0.15,
                                            duration: 0.2,
                                            delay: 0.1 * index
                                        }}
                                        onClick={() => setIsOpen(false)}
                                        className="w-full px-4 py-2 text-lg font-normal text-white transition transform rounded-md cursor-pointer text-start active:scale-95 hover:bg-neutral-900 active:opacity-80"
                                    >
                                        <Link href={link.hash} className="w-full text-start">
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </nav>
    )
};

export default MobileNav
