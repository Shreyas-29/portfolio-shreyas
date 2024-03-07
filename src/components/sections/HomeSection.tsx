import AbuotMe from '../contents/AbuotMe'
import ContactMe from '../contents/ContactMe'
import CurrentFavTech from '../contents/CurrentFavTech'
import CurrentLearnTech from '../contents/CurrentLearnTech'
import Experience from '../contents/Experience'
import FeaturedProjects from '../contents/FeaturedProjects'
import Hero from '../contents/Hero'
import MySkills from '../contents/MySkills'
import SectionContainer from '../utils/SectionContainer'

const HomeSection = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full">

                <Hero />

                <CurrentFavTech />
                <CurrentLearnTech />

                <AbuotMe />

                <Experience />

                <FeaturedProjects />

                <MySkills />

                <ContactMe />

            </div>

        </SectionContainer>
    )
};

export default HomeSection
