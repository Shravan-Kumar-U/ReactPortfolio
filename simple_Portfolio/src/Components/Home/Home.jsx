import React from 'react';
import avatarImg from '../../assets/another.png';
import Typewriter from "typewriter-effect"

const Home = () => {
  return (
    <div className='text-white flex flex-col md:flex-row items-center md:items-start justify-between w-full p-10 md:p-20'>
      {/* Left: Text Section */}
      <div className='w-full md:w-1/2 md:pt-10 text-center md:text-left'>
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tight'>
          Hello, I'm <span className='text-blue-500'>Shravan Kumar U</span> <br />I am a passionate
          <Typewriter
            options={{
              strings: ["Web Developer", "Cp Programmer", "Back end Developer"],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
            }}
          />
        </h1>
        <p className='text-sm md:text-2xl tracking-tight mt-4 md:mt-6'>
          Each of us lives dependent and bound by our individual knowledge and awareness. And we call it reality. However, both knowledge and awareness are equivocal. One's reality might be another's illusion
        </p>
        <button className='mt-5 md:mt-10 text-white py-2 px-4 md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
          Contact me
        </button>
      </div>

      {/* Right: Image Section */}
      <div className='w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-0'>
        <img className='w-2/4 md:w-2/3 max-w-sm' src={avatarImg} alt="Avatar" />
      </div>

      
{/*     
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
         <div className='md:w-2/4 md:pt-10'>
             <h1 className='text-3l md:text-6xl font-bold flex leading-normal tracking-tighter'>Hello I'am Shravan</h1>
             <p className='text-sm md:text-2xl tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique atque, nam reprehenderit cum eveniet veritatis accusamus voluptates, .</p>
             <button className='mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button>
        </div>
         <div><img className='w-2/5' src={avatarImg} alt="" /></div>
     </div> */}

      
      
    </div>
    
  );
};

export default Home;
