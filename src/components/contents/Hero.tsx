import Image from 'next/image'
import AnimationContainer from '../utils/AnimationContainer'

const Hero = () => {
    return (
        <div className="relative flex flex-col-reverse items-center justify-between w-full py-12 lg:py-16 lg:flex-row">
            <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
                <h3 className="text-sm lg:text-xl text-white/80">
                    Salutations, Code Artist{" "}
                    <span className="text-white">🚀</span>
                </h3>
                <h1 className="py-2 text-xl font-bold text-white lg:py-4 sm:text-3xl lg:text-5xl">
                    Shreyas Sihasane
                </h1>
                <h3 className="text-base text-center lg:text-start lg:text-lg text-white/80">
                    <span className="font-medium text-white">
                        Bridging Code and Design{" "}
                    </span>
                    to build beautiful and functional web applications.
                </h3>
            </AnimationContainer>

            <AnimationContainer customClassName="mb-8 relative lg:mb-0">
                <Image
                    src='/images/shreyas.png'
                    alt='Shreyas Sihasane'
                    height={2190}
                    width={2190}
                    sizes='30vw'
                    priority
                    className="object-cover object-top w-32 h-32 transition duration-300 ease-out rounded-lg filter grayscale hover:grayscale-0 lg:w-40 lg:h-40"
                />
                <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-violet-500/40 blur-[5rem]"></div>
            </AnimationContainer>
        </div>
    )
}

export default Hero
// faceapp, 