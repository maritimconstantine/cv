import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Discovery & Strategy"
          des=" I build scalable, secure, and performance-optimized websites 
          and applications using frameworks such as Reactnative, React, Expressjs, and MongoDb.
           We serve clients ranging from startups to enterprises, 
          offering solutions typical of a top web development company.."
         icon={<AiFillAppstore/>}
        />
        <Card
          title="Architecture & Design"
          des="I then graft responsive designs that are user frindly  using tools like  figma to 
          ensure  intuitive navigation and brand consistency"
          icon={<SiAntdesign />}
        />
        <Card
          title="Agile Development"
          des="I build scalable, secure, and performance-optimized websites 
          and applications using frameworks such as Reactnative, React, Expressjs, and MongoDb.
           We serve clients ranging from startups to enterprises, 
          offering solutions typical of a top web development company"
          icon={<FaMobile />}
        />
        <Card
          title="Testing & Deployment"
          des=" I perform thorough functional, performance, security, and usability testing 
          with both automated and manual approaches. After validation, we deploy with CDN 
          configurations, caching, and server optimization to 
          maximize site speed and reliability, delivering best-in-class web development 
          services in Kenya."
          icon={<FaGlobe/>}
        />
        <Card
          title="Performance Optimization & Security"
          des="Before long-term support, I fine-tune your platform for speed, stability,
           and protection. This includes code optimization, database tuning, caching strategies,
            and implementation of industry-standard security practices to 
          safeguard data, prevent vulnerabilities, and ensure compliance with modern web standards"
          icon={<SiAntdesign />}
        />
        <Card
          title="Maintenance & Support"
          des="After launch, I provide ongoing maintenance, performance monitoring, security updates,
           and feature enhancements to ensure
           your digital platform continues to scale and evolve with your business needs"
          icon={<SiProgress />}
        />
      </div>
    </section>
  );
}

export default Features