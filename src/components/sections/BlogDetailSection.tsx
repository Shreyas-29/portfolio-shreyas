import { BlogProps } from '@/types';
import BlogDetails from '../utils/BlogDetails';
import SectionContainer from '../utils/SectionContainer';

interface Props {
    data: BlogProps;
}

const BlogDetailSection = ({ data: blog }: Props) => {
    return (
        <SectionContainer>

            <div className="flex flex-col items-start w-full py-8">

                <BlogDetails blog={blog} />

            </div>

        </SectionContainer>
    )
};

export default BlogDetailSection
