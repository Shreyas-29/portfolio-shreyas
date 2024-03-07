"use client";

import React from 'react';
import { LuLoader } from "react-icons/lu";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen !z-[999999] bg-[#080809] w-screen absolute inset-0">
            <LuLoader className="w-5 h-5 animate-spin text-neutral-400" />
        </div>
    )
}

export default Loader
