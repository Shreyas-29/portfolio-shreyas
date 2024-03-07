import React from 'react'
import AnimationContainer from '../utils/AnimationContainer'

const AbuotMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>

            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start'>
                About me
            </h2>

            <p className='w-full text-base font-normal leading-7 text-justify text-neutral-200'>
                I am currently on a thrilling journey pursuing my B.Tech degree in <strong>Mechanical Engineering</strong>. Beyond the world of gears and machines, I craft engaging and responsive web applications using <strong>React</strong> and delve into the realm of mobile app development with <strong>React Native</strong>. Apart from coding, I express my creative side by designing sleek interfaces using <strong>Figma</strong>. Let&apos;s build something amazing together! ✨
            </p>

        </AnimationContainer>
    )
}

export default AbuotMe
