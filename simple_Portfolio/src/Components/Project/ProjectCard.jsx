import React from 'react';
import bannerImg from '../../assets/relax.png';

const ProjectCard = ({ title, main }) => {
  return (
    <div className="p-4 md:p-6 w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl flex flex-col items-center space-y-4">
      <img
        src={bannerImg}
        alt="Project Banner"
        className="w-full h-44 object-cover rounded-xl"
      />

      <h3 className="text-xl md:text-2xl font-bold text-white text-center">
        {title}
      </h3>

      <p className="text-sm md:text-base text-gray-300 text-center px-2">
        {main}
      </p>

      <div className="flex gap-4 mt-2">
        <button className="text-white bg-[#465687] py-2 px-4 text-sm md:text-base rounded-3xl font-semibold hover:opacity-85 hover:scale-105 duration-300">
          Demo
        </button>
        <button className="text-white bg-[#465687] py-2 px-4 text-sm md:text-base rounded-3xl font-semibold hover:opacity-85 hover:scale-105 duration-300">
          Source Code
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
