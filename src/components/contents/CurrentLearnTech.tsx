import AllLearningTechs from '../icons/AllLearningTechs';
import AnimationContainer from '../utils/AnimationContainer';

const CurrentLearnTech = () => {
    return (
        <AnimationContainer customClassName='flex flex-col justify-center items-center lg:items-start mb-5 mx-auto lg:mx-0'>
            <div className='flex flex-col items-center justify-center lg:items-start'>
                <AllLearningTechs />
            </div>
        </AnimationContainer>
    )
}

export default CurrentLearnTech
