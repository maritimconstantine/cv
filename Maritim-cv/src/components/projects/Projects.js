import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFive,projectFour,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Products"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="DailyCart"
          des=" This is an eCommerce platform that is  complete, scalable and designed to help
           entrepreneurs, startups, and businesses build and manage their online stores 
           with ease. Whether you're starting small or scaling globally, our system 
           provides all the tools you need to sell smarter and grow faster."
          src={projectTwo}
        />
        <ProjectsCard
          title="SafeLink"
          des=" Our chat application is a fast, secure, and user-friendly messaging platform 
          designed to keep people connected anytime, anywhere. Whether for personal 
          conversations, team collaboration, or business communication, it delivers seamless real-time messaging with powerful features.!"
          src={projectThree}
        />
        <ProjectsCard
          title="Weather Update"
          des="A web application that provides real-time weather updates and forecasts, helping users
           quickly check current conditions,temperature, and weather trends for specific locations."
          src={projectFive}
        />
        <ProjectsCard
          title="file Transfer"
          des=" A lightweight web application that securely transfers files between
           users through a browser, enabling
           fast uploads, downloads, and easy sharing without the need for external storage devices.!"
          src={projectSix}
        />
        <ProjectsCard
          title="Agentic AI application"
          des=" An AI-powered agent that automates tasks, answers queries, and provides intelligent recommendations by
           analyzing user input and data in real time."
          src={projectFour}
        />
        <ProjectsCard
          title="Hook Up Application"
          des=" A dating application that helps users discover and connect with compatible matches through 
          profiles, preferences, and secure in-app messaging."
          src={projectOne}
        />
      </div>
    </section>
  );
}

export default Projects