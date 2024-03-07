import { BlogProps } from '@/types';
import moment from 'moment';
import { IoMdTime } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import AnimationContainer from './AnimationContainer';
import MarkdownRenderer from './MarkdownRenderer';

interface Props {
    blog: BlogProps;
}

const BlogDetails = ({ blog }: Props) => {
    return (
        <div className="flex flex-col">
            <AnimationContainer customClassName="flex flex-col items-start w-full">
                <h2 className="text-xl lg:text-3xl font-bold text-neutral-50">
                    {blog?.title}
                </h2>
                <p className="text-sm text-neutral-400 font-normal mt-4">
                    Written by Shreyas Sihasane on {moment(blog?.publishedAt).format('DD MMM YYYY')}
                </p>
                <div className="flex flex-row items-center mt-6">
                    <span className="text-sm text-neutral-200 flex items-center">
                        <IoMdTime className="w-4 h-4 text-neutral-200 mr-1.5" />
                        {moment(blog?.publishedAt).fromNow()}
                    </span>
                    <span className="text-sm text-neutral-200 flex items-center ml-3">
                        <IoEyeOutline className="w-4 h-4 text-neutral-200 mr-1.5" />
                        50 views
                    </span>
                </div>
                <hr className="w-full border border-border h-px my-6" />
            </AnimationContainer>

            <AnimationContainer customClassName="w-full flex-col items-start">
                <MarkdownRenderer blog={blog} />
            </AnimationContainer>
        </div>
    )
};

export default BlogDetails
