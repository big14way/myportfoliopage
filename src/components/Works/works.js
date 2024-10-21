import React from 'react';
import './works.css';
import Porfolio1 from '../../assets/portfolio-1.png';
import Porfolio2 from '../../assets/portfolio-2.png';
import Porfolio3 from '../../assets/portfolio-3.png';
import Porfolio4 from '../../assets/portfolio-4.png';
import Porfolio5 from '../../assets/portfolio-5.png';
import Porfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I focus on responsive design to ensure optimal experiences across devices, conduct UX testing for continuous improvement, and collaborate with developers to implement designs effectively. Additionally, I incorporate SEO best practices and maintain websites for ongoing relevance and performance.</span>
        <div className="workImgs">
        <img src={Porfolio1} alt="" className="worksImg"/>
        <img src={Porfolio2} alt="" className="worksImg"/>
        <img src={Porfolio3} alt="" className="worksImg"/>
        <img src={Porfolio4} alt="" className="worksImg"/>
        <img src={Porfolio5} alt="" className="worksImg"/>
        <img src={Porfolio6} alt="" className="worksImg"/>
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works