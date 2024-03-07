"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
    href: string;
    delay: number;
    download?: any;
    target?: React.HTMLAttributeAnchorTarget | undefined;
    children: React.ReactNode;
}

const MotionButton = ({ href, delay, target, download, children }: Props) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ delay: 0.2 + delay, duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }}
    >
        <Link href={href} target={target} rel="noopener noreferrer" download={download}>
            {children}
        </Link>
    </motion.div>
);

export default MotionButton;
