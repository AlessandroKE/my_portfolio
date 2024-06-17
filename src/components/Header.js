import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiLaravel} from 'react-icons/si';

function Header() {
  return (
    <header className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            -hello
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            I am <span className="text-cyan-500">Koome Alessandro</span>
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mt-2">
            Fullstack Engineer
          </h3>
          <p className="mt-4 text-lg max-w-xl">
            who loves building websites from simple to complex. Excited to keep learning and aiming to become a <span className="text-blue-500 font-bold">Full Stack Developer</span>. I'm also exploring backend stuff. Let's create something awesome together, one code at a time!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => window.open('#', '_blank')}
              className="bg-blue-500 text-gray-900 px-4 py-2 rounded-md text-lg font-medium text-center"
            >
              Get Resume
            </button>
            <button
              onClick={() => window.open('#', '_blank')}
              className="border border-green-500 text-white-500 px-4 py-2 rounded-md text-lg font-medium text-center"
            >
              Contact
            </button>
          </div>
          <div className="mt-6 text-lg">
            <span className="block font-medium mb-4">Current tech stack:</span>
            <div className="flex flex-wrap space-x-4">
              <FaReact size={30} className="text-blue-500" />
              <FaNodeJs size={30} className="text-green-500" />
              <FaHtml5 size={30} className="text-red-500" />
              <FaCss3Alt size={30} className="text-blue-600" />
              <SiMongodb size={30} className="text-green-700" />
              <SiExpress size={30} className="text-gray-500" />
              <FaPhp size={30} className="text-indigo-700" />
              <SiLaravel size={30} className="text-red-600" />

            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
          <img
            className="rounded-full w-80 h-80 object-cover"
            src="/Assets/profile.jpg"
            alt="Your Name"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
