import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  return (
    <div id='Project' className='p-6 md:p-16 text-white'>
      <h1 className='text-2xl md:text-4xl font-bold text-center mb-10'>Projects</h1>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <ProjectCard
          title="Blogging Website"
          main="This is a blogging website created in Next.js and React.js using reusable components."
        />
        <ProjectCard
          title="YouTube Blog"
          main="A blog-style website focused on YouTube content, built with Next.js and modern React features."
        />
        <ProjectCard
          title="Netflix Page"
          main="A Netflix clone landing page built using React.js and styled with Tailwind CSS."
        />
      </div>
    </div>
  );
};

export default Project;
