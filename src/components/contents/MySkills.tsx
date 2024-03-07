import { skills } from '@/lib/skills';
import AnimationContainer from '../utils/AnimationContainer';
import ShowSkills from '../utils/ShowSkills';

const MySkills = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <div className="flex justify-center md:justify-start">
                <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                    Skills & Tools
                </h2>
            </div>

            <p className='mb-4 text-justify lg:leading-7 text-neutral-200 lg:text-start'>
                A creative problem solver with over 2 years of programming experience, I&apos;ve explored diverse programming languages, libraries, and technology stacks, honing my skills in both Frontend, Backend, and App development.
            </p>

            <p className='text-justify lg:leading-7 text-neutral-200 lg:text-start'>
                Eager to learn and adept at adopting new technologies, I thrive on expanding my skill set in the ever-evolving tech landscape.
            </p>

            <div className="flex flex-col items-start mt-8">
                <div className="flex flex-col flex-wrap items-start mb-2 space-y-4">
                    {skills?.map(({ title, stack }) => (
                        <AnimationContainer key={title} customClassName="flex fex-col items-center">
                            <div>
                                <h3 className="items-start mb-3 text-lg font-bold text-white">
                                    {title}
                                </h3>
                                <div className="flex flex-wrap items-center gap-4 mb-5">
                                    <ShowSkills stacks={stack} />
                                </div>
                            </div>
                        </AnimationContainer>
                    ))}
                </div>
            </div>

        </AnimationContainer>
    )
};

export default MySkills
