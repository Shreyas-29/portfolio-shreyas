import React from 'react'

const SectionContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className='w-11/12 lg:max-w-screen-md flex flex-col justify-center items-center lg:items-start lg:mx-auto mt-8 pb-16'>
            {children}
        </section>
    )
};

export default SectionContainer;
