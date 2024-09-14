// pages/index.js

import React from 'react';
import './index.css'
import www from '../pages/05.png'
import HTML from '../pages/01.png'
import prof from '../pages/professionalism.png'
import effect from '../pages/effect.png'
import quality from '../pages/quality.png'
import free from '../pages/free.png'
import tyu from '../pages/tyu.jpg'
import bn from '../pages/bn.png'
import Web from '../pages/web_app.png'
import mobil from '../pages/mobil.png'
import bot from '../pages/bot.png'
import jd from '../pages/jd.png'
import lok from '../pages/lok.png'
import white from '../pages/white_logo.png'
const Home = () => {
  return (
    <div

    >
      <div class="area" >
      <div className='text-content'>
         <div className='text'>
             <h1>Hello and welcome to <strong>A.SH Coders</strong>  startup company</h1>
          <span style={{textAlign: "justify", width: "100%"}}>
          Our company was founded on the basis of a startup project and has since successfully implemented many projects in the field of digitalization. We specialize in the implementation of advanced technologies and solutions aimed at modernizing business processes and optimizing operations. 
          </span>
         </div>
         <div className='img'>
            <img src={www} alt='img'/>
        </div>
        </div>
        <div class="container">
        <span className="run run-left"   style={{animationDelay: "0s"}}></span>
        <span className="run run-right"  style={{animationDelay: "0.2s"}}></span>
        <span className="run run-left" style={{animationDelay: "0.4s"}}></span>
        <span className="run run-right" style={{animationDelay: "0.6s"}}></span>
        <span className="run run-left" style={{animationDelay: "0.8s"}}></span>
        <span className="run run-right" style={{animationDelay: "1s"}}></span>
        <span className="run run-left" style={{animationDelay: "1.2s"}}></span>
        <span className="run run-right" style={{animationDelay: "1.4s"}}></span>
        <span className="run run-left" style={{animationDelay: "1.6s"}}></span>
        <span className="run run-right" style={{animationDelay: "1.8s"}}></span>
        <span className="run run-left" style={{animationDelay: "2s"}}></span>
        <span className="run run-right" style={{animationDelay: "2.2s"}}></span>
        <span className="run run-left" style={{animationDelay: "2.4s"}}></span>
        <span className="run run-right" style={{animationDelay: "2.6s"}}></span>
        <span className="run run-left" style={{animationDelay: "2.8s"}}></span>
        <span className="run run-right" style={{animationDelay: "3s"}}></span>
        <span className="run run-left" style={{animationDelay: "3.2s"}}></span>
        <span className="run run-right" style={{animationDelay: "3.4s"}}></span>
        <span className="run run-left" style={{animationDelay: "3.6s"}}></span>
        <span className="run run-right" style={{animationDelay: "3.8s"}}></span>
        <span className="run run-left" style={{animationDelay: "4s"}}></span>
        <span className="run run-right" style={{animationDelay: "4.2s"}}></span>
    </div>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            
    </div >
      <section>
        <h1>Advantages</h1>
        <div className="adv_box">
            <div className="cards">
                <div className="adv_card">
                   <img src={prof} alt='img' width={110}/>
                   <div className="text-card"> 
                      <h2>Professionalism</h2>
                      <p>The company employs specialists with extensive experience and good qualifications.</p>
                   </div>
                </div>
                
                <div className="adv_card">
                <img src={effect} alt='img' width={110}/>
                   <div className="text-card"> 
                      <h2>Efficiency</h2>
                      <p>The team starts working on the project from the date of signing the contract</p>
                   </div>
                </div>
            </div>
            <div className="cards">
                <div className="adv_card">
                <img src={quality} alt='img' width={110}/>
                   <div className="text-card"> 
                      <h2>Quality assurance</h2>
                      <p>Although the startup was built on a project basis, it is the trust of partners who have expressed their trust for several years</p>
                   </div>
                </div>
                <div className="adv_card">
                <img src={free} alt='img' width={110}/>
                   <div className="text-card"> 
                      <h2>Strategic partnership</h2>
                      <p>We always strive for long-term, reliable cooperation with our customers. An annual work schedule is approved with monthly details for each project.</p>
                   </div>
                </div>
            </div>
        </div>
      </section>

      <section className="two">
        <h1>Our team and environment</h1>
          <div className='content-level'>
              <div className='level-one'>
                  <div className='shape'>
                      <img src={tyu} alt='img'/>
                  </div>
              </div>
              <div className='level-two'>
              <div className='fg'> <img src={bn} alt='bn'></img> </div>
                <h2>We have been operating since 2023</h2>
                <p>During this short period of time, we have worked on various projects, gained our clients, and successfully completed and handed over the projects to their owners. Our dedication and commitment have not only met but exceeded the expectations of our clients, setting a high standard for our future endeavors.</p>
                <button className='ab-btn button button-pulse'>
                    More <span className='sp-lef'>&#8594;</span>
                </button>
              </div>
          </div>
      </section>

      <section className='three'>
            <h1>our services</h1>
            <div className='content-serviss'>
               <div className='servis-card'>
                  <img src={Web} alt='web application' width={150}></img>
                  <h2>Web application development</h2>
                  <p>We help you build a beautiful and functional web application  that caters to your specific needs.</p>
               </div>
               <div className='servis-card'>
               <img src={mobil} alt='web application' width={150}></img>
                  <h2>Mobile app development</h2>
                  <p>Mobile app development involves creating software applications designed to run on mobile devices like smartphones and tablets.</p>
               </div>
               <div className='servis-card'>
                  <img src={bot} alt='web application' width={150}></img>
                  <h2>Telegram bot</h2>
                  <p>Telegram bots are automated accounts that perform specific tasks within the Telegram messaging platform. They can interact with users, respond to commands.</p>
               </div>
            </div>
      </section>
      <section className='partners'>
         <h1>Our partners</h1>
         <div className='content-partner'>
            <div className='partner-card'>
               <img src={jd} alt='web application'></img>
            </div>
            <div className='partner-card'>
            <img src={lok} alt='web application'></img>
            </div>
         </div>
      </section>
      <footer>
         <div className='footer-one'>
            <img src={white} alt='footer-logo' width={250}></img>
            <div className='text-footer'>
               
            </div>
         </div>
         <div>
            
         </div>
         <div>
            
         </div>
      </footer>
    </div>
  );
};

export default Home;
