import '../styles/about.css';

const About = () => {
  const skills = [
    { name: 'C# Desktop Full Stack Application', level: 80 },
    { name: 'Python', level: 65 },
    { name: 'React-JavaScript', level: 70 },
    { name: 'ASP.NET Core', level: 75 },
    { name: 'PHP Web Development', level: 85 },
    { name: 'MERN STACK Development', level: 70 },
  ];

  return (
    <div className="about-container">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-image">
          <img src="/assets/images/profile.jpg" alt="Muhammad Adnan Tahseen" />
        </div>
        <div className="about-text">
          <h2>Muhammad Adnan Tahseen</h2>
          <h3>Freelance Developer & Designer</h3>
          <p>
            I'm a passionate developer and designer with over 5 years of experience 
            in creating beautiful, functional websites and applications. My journey 
            in tech started when I was in college, and since then I've been 
            constantly learning and improving my skills.
          </p>
          <p>
            I specialize in front-end development with React, back-end development 
            with ASP.NET Core, and graphic design. I believe in creating solutions 
            that are not only functional but also provide an excellent user experience.
          </p>
          <div className="skills-section">
            <h4>My Skills</h4>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-level" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;