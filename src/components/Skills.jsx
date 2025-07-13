import { FaDesktop, FaPython, FaJs, FaReact, FaNodeJs, FaPhp, FaServicestack } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { GoStack } from "react-icons/go";
import '../styles/skills.css';

const Skills = () => {
  const skills = [
    { name: 'C# Desktop Full Stack Application', icon: <FaDesktop />, color: '#E34F26' },
    { name: 'Python', icon: <FaPython />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'ASP.NET Core', icon: <SiDotnet />, color: '#512BD4' },
    { name: 'PHP Web Development', icon: <FaPhp />, color: '#FF6B6B' },
    { name: 'MERN STACK Development', icon: <GoStack />, color: '#6B5B95' },
  ];

  return (
    <div className="skills-container" id="skills">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-card"
            style={{ borderBottom: `3px solid ${skill.color}` }}
          >
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;