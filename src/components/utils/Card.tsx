import { Project as ProjectProps } from '@/types';
import { Badge } from '@mantine/core';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from '../ui/Button';
import AnimationContainer from './AnimationContainer';

interface Props {
    project: ProjectProps;
}

const Card = ({ project }: Props) => {
    return (
        <AnimationContainer customClassName='bg-[#080809] border border-border w-full hover:border-neutral-700 rounded-xl'>

            <div className="flex-col items-start p-4 lg:p-5">
                <div className="flex flex-col items-start space-y-4">
                    <h4 className="text-lg font-medium text-neutral-100">
                        {project?.title}
                    </h4>
                    <p className="text-sm text-neutral-300">
                        {project?.description}
                    </p>
                    <div className="flex flex-col lg:flex-row items-start justify-start space-y-4 lg:space-y-0 lg:justify-between w-full">
                        <div className="flex items-center justify-start flex-wrap gap-2">
                            {project?.stack?.map((item, index) => (
                                <Badge
                                    key={index}
                                    size="sm"
                                    radius="xs"
                                    variant="filled"
                                    color="dark"
                                    className="transition-colors duration-300 ease-in-out bg-neutral-600/70 hover:bg-neutral-700"
                                >
                                    <span className="font-medium text-white">
                                        {item}
                                    </span>
                                </Badge>
                            ))}
                        </div>
                        <div className="flex items-end gap-4">
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
                </div>
            </div>

        </AnimationContainer>
    )
};

export default Card
