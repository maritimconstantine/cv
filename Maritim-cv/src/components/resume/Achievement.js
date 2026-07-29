import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
           <ResumeCard
            title="🚀 Achievement 1: E-Commerce Platform Development"
            result="Success"
            des="Successfully designed and deployed a full-featured e-commerce application that 
            streamlined product management, secure payments, and order processing, helping 
            businesses increase online sales and improve customer experience."
          />
          <ResumeCard
            title="🤖 Achievement 2: AI-Powered Solution Implementation"
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Built and integrated an AI-driven solution to automate decision-making and user
             interactions, improving efficiency,
             reducing manual workload, and delivering smarter, data-driven outcomes.!"
          />
          <ResumeCard
            title="🌐 Achievement 3: Web & Mobile Application Training."
            result="Success"
            des="Trained learners and professionals in web and mobile application development, 
            equipping them with practical,
             industry-ready skills and empowering them to build real-world digital solutions.!"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="🔐 Achievement 6: Secure & Scalable System Design"
            result="Success"
            des="Designed and implemented secure, scalable system architectures with a focus on data protection, reliability, and future growth,
             ensuring applications remain stable as user demand increases.!"
          />
          <ResumeCard
            title="⚙️ Achievement 4: System Support & Optimization."
            result="Success"
            des="Provided reliable system support and technical optimization services, ensuring high
             system availability, improved performance, and rapid resolution of technical 
            issues across multiple platforms.!"
          />
          <ResumeCard
            title="📊 Achievement 5: Data-Driven Application Development."
            result="Success"
            des="Developed data-centric applications that collect, process, and visualize 
            information in real time, enabling stakeholders to make informed 
            decisions and improving operational efficiency.!"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
