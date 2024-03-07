"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Toaster } from '../ui/Sonner';

const Providers = ({
    children
}: {
    children: React.ReactNode
}) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster />
            {children}
        </QueryClientProvider>
    )
};

export default Providers;
