import AboutImg from '../../assets/test.png'
import { IoArrowForward } from "react-icons/io5"

const About = () => {
  return (
    <div id='About' className='bg-black bg-opacity-30 shadow-xl rounded-lg p-8 md:p-12 mx-4 md:mx-20 text-white'>
      <h2 className='text-3xl md:text-4xl font-bold mb-8 text-center'>About</h2>
      
      <div className='flex flex-col md:flex-row gap-10 items-center'>
        <img className='w-full md:w-1/2 rounded-lg shadow-lg' src={AboutImg} alt="Developer image" />

        <ul className='w-full md:w-1/2 space-y-6'>
          {[
            {
              title: "Frontend Developer",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore repudiandae? Fugit quis, obcaeciam!"
            },
            {
              title: "Backend Developer",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore repudiandae? Fugit quis, obcaecati cumque ullam molestiae ipsa inventore mim!"
            },
            {
              title: "CP Programmer",
              desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore repudiandae? Fugit quis, obca!"
            },{
               title: "DBMS",
               desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, inventore repudiandae? Fugit quis, obca!" 
            }
          ].map((item, idx) => (
            <li key={idx} className='flex items-start gap-4'>
              <IoArrowForward size={28} className='mt-1 text-blue-400' />
              <div>
                <h3 className='text-xl md:text-2xl font-semibold'>{item.title}</h3>
                <p className='text-sm md:text-base text-gray-300 mt-1'>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About

