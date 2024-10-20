import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import webDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
   <section id='skills'>
    <span className="skillTitle">What I do</span>
    <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user friendly websites.  i have a strong understanding of design and a keen eye for detail. i am proficient in HTML, CSS, and Javascript, as well as design software such as Adobe Photoshop and illustrator.</span>
    <div className="skillBar">
    <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
    <div className="skillBarText">
    <h2>UI/UX Design</h2>
    <p>My work involves conducting user research, developing wireframes and prototypes, and conducting usability testing to ensure designs meet user needs and business objectives. I collaborate closely with cross-functional teams, including developers and product managers, to deliver intuitive interfaces that enhance user engagement. Proficient in design tools like Sketch, Figma, and Adobe Creative Suite, I am dedicated to optimizing the user journey through iterative design and feedback.</p>
    </div>
    </div>
    <div className="skillBar">
    <img src={webDesign} alt="webDesign" className="skillBarImg"/>
    <div className="skillBarText">
    <h2>Website Design</h2>
    <p>With a focus on responsive design, I combine aesthetics and functionality to create seamless online experiences. Proficient in HTML, CSS, and design tools like Figma and Adobe XD, I collaborate with clients to bring their vision to life, ensuring that each site not only reflects their brand identity but also drives user engagement. My goal is to create websites that are not only beautiful but also optimized for performance and usability.</p>
    </div>
    </div>
    <div className="skillBar">
    <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
    <div className="skillBarText">
    <h2>App Design</h2>
    <p>I focus on user research and interface design, ensuring that every app I design is both visually appealing and easy to navigate. Proficient in tools like Sketch, Figma, and Adobe XD, I collaborate closely with developers and stakeholders to bring innovative ideas to life.</p>
    </div>
    </div>
   </section>
  );
}

export default Skills;