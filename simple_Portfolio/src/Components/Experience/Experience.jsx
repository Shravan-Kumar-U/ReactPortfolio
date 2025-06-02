
import { 
  FaCss3, FaFigma, FaHtml5, FaJs, FaGoogle, FaAmazon, FaJava, FaReact 
} from "react-icons/fa"
import { SiRedis, SiMongodb, SiPostgresql } from "react-icons/si"

const techSkills = [
  { icon: <FaHtml5 size={50} color="#E34F26" /> },
  { icon: <FaCss3 size={50} color="#264de4" /> },
  { icon: <FaReact size={50} color="#61DBFB" /> },
  { icon: <FaJs size={50} color="#f0db4f" /> },
  { icon: <FaJava size={50} color="#f89820" /> },
  { icon: <FaGoogle size={50} color="#4285f4" /> },
  { icon: <SiMongodb size={50} color="#4db33d" /> },
  { icon: <SiPostgresql size={50} color="#336791" /> },
  { icon: <SiRedis size={50} color="#d82c20" /> },
]

const experiences = [
  {
    icon: <FaGoogle size={50} color="#4285f4" />,
    title: "Software Engineer - Google",
    duration: "Sept 2023 - Present",
    points: ["Work as Developer", "Beginner"],
  },
  {
    icon: <FaFigma size={50} color="#a259ff" />,
    title: "UI/UX Intern - Figma",
    duration: "Aug 2022 - Jan 2023",
    points: ["Collaborated on wireframes", "Designed mobile UI"],
  },
  {
    icon: <FaAmazon size={50} color="#ff9900" />,
    title: "Backend Intern - Amazon",
    duration: "May 2023 - Aug 2023",
    points: ["Built REST APIs", "Used AWS Lambda"],
  },
]

const Experience = () => {
  return (
    <div id="Experience" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold mb-10">Experience</h1>

      <div className="flex flex-wrap justify-around gap-10">
        {/* Skills Section */}
        <div className="flex flex-wrap gap-6 md:w-2/5 bg-zinc-900 p-6 rounded-2xl">
          {techSkills.map((skill, index) => (
            <span 
              key={index}
              className="p-3 bg-zinc-800 rounded-2xl shadow-md flex items-center justify-center"
            >
              {skill.icon}
            </span>
          ))}
        </div>

        {/* Experience Cards */}
        <div className="flex flex-col gap-6 md:w-[50%]">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="flex gap-6 bg-slate-950 bg-opacity-45 rounded-lg p-4 items-start"
            >
              {exp.icon}
              <div>
                <h2 className="text-lg md:text-xl font-semibold">{exp.title}</h2>
                <p className="text-sm font-thin">{exp.duration}</p>
                <ul className="text-sm mt-2 list-disc ml-5 space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience

