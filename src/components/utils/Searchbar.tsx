import { LuSearch } from "react-icons/lu";
import { Input } from '../ui/Input';
import AnimationContainer from './AnimationContainer';

interface Props {
    searchQuery: string;
    handleSearch: (query: string) => void;
}

const Searchbar = ({ searchQuery, handleSearch }: Props) => {
    return (
        <AnimationContainer customClassName="w-full flex items-center justify-center">

            <div className="relative w-full">

                <LuSearch className="absolute left-3 top-2.5 transform w-5 h-5 text-neutral-500" />

                <Input
                    type="text"
                    placeholder="Search for a blog post"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10"
                />

            </div>

        </AnimationContainer>
    )
};

export default Searchbar
