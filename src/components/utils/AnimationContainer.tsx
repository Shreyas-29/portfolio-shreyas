"use client";

import { AnimationContainerProps } from '@/types';
import { motion } from 'framer-motion';

const AnimationContainer = ({ children, customClassName, customDelay = 0.3 }: AnimationContainerProps) => {
    return (
        <motion.div
            className={customClassName}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: customDelay, duration: 0.2, ease: 'easeInOut', type: 'spring', stiffness: 260, damping: 20 }}
        >

            {children}

        </motion.div>
    )
};

export default AnimationContainer
