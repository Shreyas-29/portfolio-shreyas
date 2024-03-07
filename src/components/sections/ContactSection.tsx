import ContactMe from '../contents/ContactMe'
import AnimationContainer from '../utils/AnimationContainer'
import Heading from '../utils/Heading'
import SectionContainer from '../utils/SectionContainer'

const ContactSection = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

                <Heading title="Contact" />

                <AnimationContainer customClassName="w-full flex flex-col relative gap-5 mb-8">

                    <ContactMe />

                </AnimationContainer>
            </div>
        </SectionContainer>
    )
};

export default ContactSection
