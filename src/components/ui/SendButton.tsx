"use client";

import React, { useRef, useState } from 'react';
import { AnimatePresence, Variants, motion, useAnimation } from 'framer-motion';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { IoIosPaperPlane } from 'react-icons/io';
import { cn } from '@/lib/utils';
import { buttonVariants } from './Button';
import { LuLoader } from "react-icons/lu";
import { UseMutateFunction } from '@tanstack/react-query';
import { FieldErrors } from 'react-hook-form';

interface Props {
    isSent: boolean;
    isLoading: boolean;
    disabled: boolean;
    setIsSent: (isSent: boolean) => void;
}

const SendButton = ({ isSent, isLoading, setIsSent, disabled }: Props) => {

    const iconVariants: Variants = {
        open: {
            opacity: 1, x: 0, y: 0, scale: 1, transition: {
                duration: 0.5,
                bounce: 0.5,
                type: 'spring',
            },
        },
        close: {
            opacity: 0, x: 50, y: -50, scale: 0, transition: {
                duration: 0.5,
                bounce: 0.5,
                type: 'spring',
            }
        },
    };

    const checkMarkVariants: Variants = {
        open: {
            opacity: 1, x: -23, y: 0, scale: 1, transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.5,
            }
        },
        close: {
            opacity: 0, x: -50, y: 50, scale: 0, transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.5,
            }
        },
    };

    return (
        <AnimatePresence>
            <motion.button
                type='submit'
                disabled={disabled || isLoading}
                className={buttonVariants({ className: "px-6 w-full md:w-60 cursor-pointer md:px-8 py-2 text-center overflow-hidden bg-white font-semibold rounded-md flex items-center justify-center z-20 space-x-1.5" })}
            >
                <span className={cn(
                    "text-neutral-900",
                    isLoading ? "ml-0" : "ml-5"
                )}>
                    {isLoading ? "Sending..." : isSent ? "Sent" : "Send Message"}
                </span>

                {isLoading ? (
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring', bounce: 0.5 }}
                    >
                        <LuLoader className="w-5 h-5 animate-spin text-neutral-700" />
                    </motion.span>
                ) : (
                    <>
                        <motion.span
                            animate={isSent ? 'close' : 'open'}
                            initial="open"
                            variants={iconVariants}
                            className=""
                        >
                            <IoIosPaperPlane className="w-5 h-5 text-neutral-900" />
                        </motion.span>
                        <motion.span
                            animate={isSent ? 'open' : 'close'}
                            initial="close"
                            variants={checkMarkVariants}
                            className=""
                        >
                            <IoCheckmarkCircle className="w-5 h-5 text-neutral-900" />
                        </motion.span>
                    </>
                )}
            </motion.button>
        </AnimatePresence>
    );
};
// else show conditionally the checkmark icon

export default SendButton;
