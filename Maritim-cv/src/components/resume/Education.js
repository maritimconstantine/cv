import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2000-2019</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Mt Kenya University (2017- 2019)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="AS - Science & Information"
            subTitle="Rift Valley National Polytechnic(2013 - 2017)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an Diploma. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Koiwa Boys Secondary School (2006 - 2010)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Web and Mobile application Trainner"
            subTitle="Sotik Technical College- (2023- Present)"
            result="Kenya"
            des="Deliver hands-on training in web and application development, guide learners 
            through practical projects, explain core concepts clearly, 
            and support users to build, deploy, and maintain functional digital solutions.."
          />
          <ResumeCard
            title=" Part Time System Support Technician"
            subTitle="Amtech Technologies - (2019 - 2020)"
            result="Kenya"
            des="Hepled in delivering,customizing,deploying sytems and offering technical support to clients."
          />
          <ResumeCard
            title="System Support Technician"
            subTitle="Ndanai FSA- (2017 - 2019)"
            result="Kenya"
            des="Provided frontline technical support for hardware, software, and network issues, troubleshooting and resolving user problems, performing system maintenance,
             and ensuring reliable IT operations with minimal downtime.."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
