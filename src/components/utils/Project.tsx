import { Project as ProjectProps } from '@/types';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from '../ui/Button';
import AnimationContainer from './AnimationContainer';

interface Props {
    project: ProjectProps;
}

const Project = ({ project }: Props) => {

    const truncateDescription = (description: string) => {
        const firstFullStopIndex = description.indexOf('.');
        const firstExclamationIndex = description.indexOf('!');

        let truncateIndex = -1;

        if (firstFullStopIndex !== -1 && firstExclamationIndex !== -1) {
            // Choose the earlier occurrence of '.' or '!'
            truncateIndex = Math.min(firstFullStopIndex, firstExclamationIndex) + 1;
        } else if (firstFullStopIndex !== -1) {
            truncateIndex = firstFullStopIndex + 1;
        } else if (firstExclamationIndex !== -1) {
            truncateIndex = firstExclamationIndex + 1;
        }

        return truncateIndex !== -1 ? description.slice(0, truncateIndex) : description;
    };

    return (
        <AnimationContainer customClassName='bg-[#080809] border border-border/50 w-full hover:border-neutral-800 rounded-xl'>

            <div className="flex-col items-start p-4 h-full flex lg:p-5">
                <h4 className="text-lg font-medium text-neutral-100">
                    {project?.title}
                </h4>
                <p className="mt-4 text-sm text-neutral-300 flex-1">
                    {truncateDescription(project?.description)}
                </p>
                <div className="flex items-start w-full gap-4 mt-4">
                    <Link href={project.github} target="_blank">
                        <Button variant="outline" size="sm">
                            <SiGithub className="w-5 h-5" />
                            <span className="ml-2">
                                Github
                            </span>
                        </Button>
                    </Link>
                    <Link href={project.view} target="_blank">
                        <Button variant="outline" size="sm">
                            <TbExternalLink className="w-5 h-5" />
                            <span className="ml-2">
                                View
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>

        </AnimationContainer>
    )
}

export default Project
