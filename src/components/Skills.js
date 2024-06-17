import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub, FaLinux, FaJava, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiJira, SiPostman, SiVisualstudiocode, SiExpress, SiMongodb, SiPhp, SiLaravel } from 'react-icons/si';
/* import SkillCard from '../skills/skillCard'; */
import SkillCard from '../skills/SkillCard';

const Skills = () => {
  return (
    <section className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8 mt-40">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-8">
          <div>
            <div>
              Ever improving <span style={{ backgroundColor: ' #ADD8E6', color: '#000', padding: '5px', borderRadius: '1rem' }}>Skills...</span>
            </div>

          </div>

        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <SkillCard title="Frontend">
            <FaHtml5 size={60} className="text-red-600" />
            <FaCss3Alt size={60} className="text-blue-600" />
            <FaJs size={60} className="text-yellow-400" />
            <FaReact size={60} className="text-blue-500" />
            <SiTailwindcss size={60} className="text-teal-400" />
          </SkillCard>

          <SkillCard title="Other">
            <FaGit size={60} className="text-orange-500" />
            <FaGithub size={60} className="text-gray-400" />
            <FaLinux size={60} className="text-yellow-600" />
            <SiPostman size={60} className="text-orange-500" />
            <SiVisualstudiocode size={60} className="text-blue-500" />
            <SiJira size={60} className="text-blue-500" />
          </SkillCard>

          <SkillCard title="Backend">
            <FaJava size={60} className="text-red-600" />
            <FaNodeJs size={60} className="text-green-500" />
            <SiPhp size={60} className="text-purple-600" />
            <SiLaravel size={60} className="text-red-500" />
            <SiExpress size={60} className="text-gray-500" />
            <SiMongodb size={60} className="text-green-600" />

          </SkillCard>

        </div>
      </div>
    </section>
  );
};

export default Skills;
