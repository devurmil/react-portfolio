import React from 'react'
import PageWrapper from "../helper/Pagewrapper";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import AboutIntro from "../components/About/AboutIntro";
import Motivation from '../components/About/Motivation';
import Experience from '../components/About/Experience';
import Timeline from '../components/About/Timeline';
import SoftSkills from '../components/About/SoftSkills';
import PersonalTouch from '../components/About/PersonalTouch';
import AboutCTA from '../components/About/AboutCTA';

function About() {
  return (
    <>
     <PageWrapper>
      <AnimatedBackground />
      <main className="relative max-w-7xl mx-auto px-4">
        <AboutIntro />
        <Motivation />
        <Experience />
        <Timeline />
        <SoftSkills />
        <PersonalTouch />
        <AboutCTA />
      </main>
     </PageWrapper>
    </>
  )
}

export default About