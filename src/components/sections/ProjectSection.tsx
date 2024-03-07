import ProjectCards from '../contents/ProjectCards';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import SectionContainer from '../utils/SectionContainer';

const ProjectSection = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

                <Heading title="Projects" />

                <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:text-start lg:leading-8 text-neutral-200">
                        Welcome to my digital playground, where each project is a crafted story in code. From interactive websites to sleek mobile apps, each line serves a purpose, and every pixel has a tale to tell. Join me on this journey where innovation meets imagination, and let&apos;s turn ideas into living, breathing projects.
                    </p>
                </AnimationContainer>

                <ProjectCards />

            </div>
        </SectionContainer>
    )
};

export default ProjectSection
