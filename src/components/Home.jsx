import { useEffect, useRef } from 'react';
import { init } from 'ityped';
import '../styles/home.css';

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['PHP Developer', 'ReactJS Developer', 'ASP.NET Core Developer','C# Desktop App Developer'],
    });
  }, []);

  return (
    <div className="home-container">
      <div className="home-section">
        <div className="home-image">
          <img src="/assets/images/profile.jpg" alt="Muhammad Adnan Tahseen" />
        </div>
        <div className="home-intro">
          <h1>Hi there I am,</h1>
          <h2>Muhammad Adnan Tahseen</h2>
          <h3>Freelance <span ref={textRef} style={{color:'#4DB6AC'}}></span></h3>
          <p>
            Welcome to my portfolio website. I'm a passionate developer and designer 
            with expertise in multiple domains. Feel free to explore my work and get in touch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;