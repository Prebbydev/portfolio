import React, { useEffect } from 'react';
import './App.css';
import myImage from './images/myImage.png';
import taillWind from './images/taillWind.png';
import typeescript from './images/typeescript.png';
import nexttjs from './images/next-js.png';
import youtube from './images/youtube.png';
import task from './images/task.png';
import translator from './images/translator.png';
import { FaArrowUp, FaEnvelope, FaJsSquare } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaBootstrap, FaLinkedin, FaWhatsapp, FaTwitter } from 'react-icons/fa';

function App() {
  useEffect(() => {
    const animatedDivs = document.querySelectorAll('.animated-div');

    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function animateElementsOnScroll() {
      animatedDivs.forEach((div) => {
        if (isInViewport(div)) {
          div.classList.add('in-viewport');
        }
      });
    }

    animateElementsOnScroll();

    window.addEventListener('scroll', animateElementsOnScroll);

    return () => {
      window.removeEventListener('scroll', animateElementsOnScroll);
    };
  }, []);

  return (
    <div className="page">
      <div className="homepage">
        <div className="sec_1 ">
          <div className="content">
            <p className='p_1 animated-div'><b>Hello!</b> My name is</p>
            <h2 className='animated-div'>
              Ogbolu Precious
            </h2>
            <p className='p_2 animated-div'> I am a <i style={{color:"rgba(28, 119, 195, 1)" , fontWeight:"800"}}>Front End Developer</i> skilled at creating web applications using React, JavaScript, NextJs and other programming languages.</p>
            <p className='p_2 animated-div'>I have a keen interest in expanding my skillset in a diverse range of technologies.</p>
            <div className='sec_4'>
              <a href='#contactMe'>
                <button className='animated-div'>Contact Me</button>
              </a>
              <div className='projectLink animated-div'>
                <a href='#projects'>
                  See Projects<FaArrowUp className='projectIcon'/>
                </a>
                <hr style={{borderBottom:" 1px solid rgba(57, 169, 219, 1)" ,width:"100px",margin:"0",marginTop:"2px",border:"none"}}/>
              </div>
            </div>
          </div>
        </div>
        <div className="sec_2"></div>
        <div className='sec_3'>
          <img src={myImage} alt='My pic' className='animated-div'/>
        </div>
      </div>
      <div className='aboutMe'>
        <h2 className='animated-div'>About Me</h2>
        <p className='animated-div'><i>Hello there!</i> I am a front-end developer that is passionate about crafting
          engaging and responsive user interfaces. My interest in creating elegantly
          functional websites from ideas led me to pursue a career in web development.<br/>
          I specialize in creating dynamic and intuitive user experiences using modern web
          technologies.
          I enjoy tackling challenges and finding creative solutions to enhance user interactions.
          <br/>In order to deliver cutting-edge projects in this field that is always changing,I am 
          committed to keeping up with the newest trends and technologies.
          I'm always eager to work on interesting projects and establish new connections. Kindly get in touch with me for 
          collaborations or connections.
        </p>
        <button className='animated-div'>View Resume</button>
      </div>
      <div className='mySkills '>
        <h2 className='animated-div'>My Skills</h2>
        <div className='skillContainer animated-div'>
          <div className='skill'>
            <FaJsSquare className='skill_icon'/>
            <p>JavaScript</p>
          </div>
          <div className='skill'>
            <FaHtml5 className='skill_icon'/>
            <p>HTML5</p>
          </div>
          <div className='skill'>
            <FaCss3Alt className='skill_icon'/>
            <p>CSS3</p>
          </div>
          <div className='skill'>
            <FaReact className='skill_icon'/>
            <p>React</p>
          </div>
          <div className='skill'>
            <img src={typeescript} alt='' className='skill_png'/>
            <p>TypeScript</p>
          </div>
          <div className='skill'>
            <FaGithub className='skill_icon'/>
            <p>Git</p>
          </div>
          <div className='skill'>
            <FaBootstrap className='skill_icon'/>
            <p>Bootstrap</p>
          </div>
          <div className='skill'>
            <img src={taillWind} alt='' className='skill_png'/>
            <p>TailWindCss</p>
          </div>
          <div className='skill'>
            <img src={nexttjs} alt='' className='skill_png'/>
            <p>NextJs</p>
          </div>
        </div>
      </div>
      <div id='projects' >
        <h2 className='project_heading animated-div'>Projects</h2>
        <div className='projectContainer'>
          <div className='project'>
            <img src={youtube} alt='' className='project_img animated-div' />
            <h2 className='animated-div'>YouTube Clone App</h2>
            <p className='animated-div'>I cloned the YouTube App, replicating its key functionalities and user 
              interface. The clone provides a familiar and seamless user experience,
              allowing users to browse and watch videos. This project demonstrates a solid
              understanding of API integration and problem solving in the context of real-world 
              applications.
            </p>
            <h5 className='animated-div'>Technologies Used: Html, Vanilla CSS, JavaScript </h5>
            <button className='animated-div'>View Project</button>
          </div>
          <div className='project'>
            <img src={task} alt='' className='project_img animated-div'/>
            <h2 className='animated-div'>Task Manager Web App</h2>
            <p className='animated-div'>I developed a task management web app that provides users with a user-friendly
              interface for creating, editing, and organizing tasks. This project
              demonstrates my proficiency in responsive design and real-time
              data synchronization. It ensures a collaborative task management
              experience for users of varying technical backgrounds.
            </p>
            <h5 className='animated-div'>Technologies Used: React, Bootstrap, FireBase</h5>
            <button className='animated-div'>View Project</button>
          </div>
          <div className='project'>
            <img src={translator} alt='' className='project_img animated-div'/>
            <h2 className='animated-div'>Language Translator</h2>
            <p className='animated-div'>This translator app enables users to seamlessly translate text between languages. 
              Leveraging react's dynamic capabilities and integrating with translation APIs, the app demonstrates
              my proficiency in frontend development, API integration and creating practical solutions
              for users seeking multilingual communication.
            </p>
            <h5 className='animated-div'>Technologies Used: React, TailWind, Google Cloud API</h5>
            <button className='animated-div'>View Project</button>
          </div>
        </div>
      </div>
      <div id='contactMe' >
        <div className='contact_container'>
          <h4 className='contact_h4 animated-div'>Contact Me</h4>
          <div className='contact_div'>
            <a href='mailto:ogboluprecious22@gmail.com'>
              <FaEnvelope className='contact_icon animated-div' />
            </a>
            <a href='https://wa.me/+2347011149292'>
              <FaWhatsapp className='contact_icon animated-div'/>
            </a>
            <a href='https://github.com/Prebbydev'>
              <FaGithub className='contact_icon animated-div'/>
            </a>
            <a href='https://www.linkedin.com/in/precious-ogbolu-91aaa4198/'>
              <FaLinkedin className='contact_icon animated-div'/>
            </a>
            <a href='https://twitter.com/_southieB'>
              <FaTwitter className='contact_icon animated-div'/>
            </a>
          </div>
        </div>
        <div className='copyright'>
          <p className='animated-div'>&copy; 2023 Ogbolu Precious. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
