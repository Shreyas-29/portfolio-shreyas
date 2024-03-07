import { AnimationContainer, Button, SectionContainer } from '@/components';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
            <SectionContainer>

                <AnimationContainer customClassName="flex flex-col items-center justify-center mx-auto py-16">

                    <div className="flex items-center justify-center h-full flex-col">
                        <span className="text-sm px-3.5 py-1 rounded-md bg-gradient-to-br from-sky-400 to-blue-600 text-neutral-50 custom-shadow">
                            404
                        </span>
                        <h1 className="text-3xl md:text-5xl font-bold text-neutral-50 mt-5">
                            Not Found
                        </h1>
                        <p className="text-base text-neutral-400 font-medium mt-5 text-center mx-auto max-w-xl">
                            The page you are looking for does not exist. If you believe this is a mistake or need further assistance, feel free to{" "}
                            <Link href="/https://github.com/Shreyas-29/portfolio-shreyas/issues">
                                <b>open an issue</b>
                            </Link>
                            . Thank you for your understanding.
                        </p>
                        <Link href="/">
                            <Button variant="secondary" className="mt-8">
                                Back to homepage
                            </Button>
                        </Link>
                    </div>

                </AnimationContainer>

            </SectionContainer>
        </main>
    )
};

export default NotFound;