import { Heading, SectionContainer } from '@/components';
import React from 'react'

const Notes = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
            <SectionContainer>
                <div className="flex flex-col items-start w-full mt-0 lg:mt-8">
                    <Heading title="Coming Soon..." />
                </div>
            </SectionContainer>
        </main>
    )
};

export default Notes
