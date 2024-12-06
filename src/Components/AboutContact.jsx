import React from "react";
import styles from "./AboutContact.module.css";
import { TfiEmail } from "react-icons/tfi";
import { CiMobile4 } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbCircleLetterAFilled } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";



const AboutContact = () => {


  return (
    <div className={styles.Abcontainer}>
      <div className={styles.bentoContainer}>
        <div className={styles.box1}>
          <h1 className={styles.abnametitle} >
            Roberta Trombetta Full-Stack Web Developer based in Bremen, germany
          </h1>
          <ul className={styles.abul}>
            <li className={styles.abcontactlist}>
              <CiMobile4 /> <a href={'tel: +4917660192182'}>+4917660192182</a>
              
            </li>
            <li className={styles.abcontactlist}>
              <TfiEmail /> <a href={'mailto: betatrombettamail@gmail.com'}>betatrombettamail@gmail.com</a>
            </li>
            <li className={styles.abcontactlist}>
            <CiLinkedin /> <a href="https://www.linkedin.com/in/roberta-trombetta/">https://www.linkedin.com/in/roberta-trombetta/</a>
            </li>
            <li className={styles.abcontactlist}>
            <FiGithub /> <a href="https://github.com/betafalc2">https://github.com/betafalc2</a>
            </li>
          </ul>
        </div>

        <div className={styles.box2}>
          <p>
            Full Stack Web Developer with a strong background in customer
            service and team leadership. Proven track record in managing and
            training diverse teams, optimizing processes, and enhancing
            operational efficiency. Recently completed the Ironhack Full-Stack
            Web Development Bootcamp, gaining proficiency in modern technologies
            like HTML, CSS, JavaScript, React, and MongoDB. Highly adaptable,
            with strong problem-solving skills, a passion for learning, and the
            ability to drive results in dynamic environments.
          </p>
        </div>

        <div className={styles.box3}>
        <section className={styles.abexperiencesection} >
        <h3 className={styles.abexperiencejobtitle}> Team Leader</h3>
        <div className={styles.abexperienceinfo}>
        <h2 className={styles.abexperiencedate}> <FaCalendarCheck />10/2014 - 09/2023  </h2>
        <h2 className={styles.abexperiencelocal}><IoLocationSharp /> Bremen</h2>
        </div>
        </section>
          <ul className={styles.abexperienceul} >
            <li> <IoIosArrowForward />From agent to Supervisor in 2 years and then to Team Leader after 5 
            years, in 2021</li>
            <li><IoIosArrowForward /> Customer support, reservations and booking of flights and servicing loyalty members</li>
            <li><IoIosArrowForward /> Customer Relationship as well as independent handling and documentation of the incurring administrative tasks</li>
            <li><IoIosArrowForward /> Information sharing through numerous emails with step by step guides for processes and extensive handouts for technical backoffice tasks that were shared with colleagues throughout the company</li>
            <li><IoIosArrowForward /> Cataloguing of 100 processes for quick reference for several 
            colleagues</li>
            <li><IoIosArrowForward /> Daily email handling of the local account managers from Brazil and 
            Portugal</li>
            <li><IoIosArrowForward /> Gave numerous trainings and refreshers to colleagues over the years</li>
            <li><IoIosArrowForward /> Going to Romania at the end of March to give training and support 
            for IGT</li>
          </ul>
          <br />

        <section className={styles.abexperiencesection} >
        <h3 className={styles.abexperiencejobtitle}> Junior Manager</h3>
        <div className={styles.abexperienceinfo}>
        <h2 className={styles.abexperiencedate}> <FaCalendarCheck /> 10/2013 - 08/2014  </h2>
        <h2 className={styles.abexperiencelocal}><IoLocationSharp /> Rio de Janeiro</h2>
        </div>
        </section>

          <ul className={styles.abexperienceul} >
            <li> <IoIosArrowForward /> Administrative and financial functions</li>
            <li><IoIosArrowForward /> Closing cash register daily</li>
            <li><IoIosArrowForward /> Direct contact with clients</li>
            <li><IoIosArrowForward /> Sales and relationship management with customers</li>
            <li><IoIosArrowForward /> Lead the team of professionals</li>
            </ul>
      
        </div>
        <div className={styles.box4}>

        <section className={styles.abachievementsection} >
          <ul className={styles.abachievementul} >
            <li className={styles.abachievementh2} > <IoDiamondOutline />Promoted to Team Leader within 5 years</li>
            <li>managing a team and driving operational efficiency</li>
            <li className={styles.abachievementh2}><IoDiamondOutline />Catalogued 100+ Processes </li>
            <li>enhancing team productivity by providing quick reference guides for complex tasks</li>
            <li className={styles.abachievementh2} ><IoDiamondOutline /> Trained and Supported Teams</li>
            <li>both locally and internationally, including a special training mission to Romania for IGT</li>
            </ul>
            </section>

        </div>

        <div className={styles.box5}>
  <div className={styles.innerBoxContainer}>
    <div className={styles.innerBox1}>
      <section className={styles.abskillsection}>
        <ul className={styles.abskillul}>
          <li><FaHtml5 />HTML</li>
          <li><FaCss3Alt />CSS</li>
          <li><IoLogoJavascript />JavaScript</li>
          <li><RiReactjsLine />React</li>
          <li><RiNodejsLine />Node.js</li>
          <li><SiExpress />Express.js</li>
          <li><SiMongodb />MongoDB</li>
          <li><TbCircleLetterAFilled />Amadeus</li>
        </ul>
      </section>
      
    </div>
    <div className={styles.innerBox2}>
     <section className={styles.ablanguagesection}>
      <ul className={styles.ablanguageul}>
        <li> <span>Portuguese</span><GoDotFill /><GoDotFill /><GoDotFill /><GoDotFill /><GoDotFill /></li>
        <li><span>English</span><GoDotFill /><GoDotFill /><GoDotFill /><GoDotFill /><GoDot /></li>
        <li> <span>Spanish</span><GoDotFill /><GoDotFill /><GoDotFill /><GoDot /><GoDot /></li>
        <li><span>German</span><GoDotFill /><GoDotFill /><GoDotFill /><GoDot /><GoDot /></li>
      </ul>
     </section>
     
    </div>
  </div>
</div>

        <div className={styles.box6}>
        <section className={styles.abeducationsection} >
        <h3 className={styles.abeducationtitle}> Full-Stack Web Developer</h3>
       <div className={styles.abeducationinfo}> 
       <h2 className={styles.abeducationdate}> <FaCalendarCheck />07/2024 - 09/2024  </h2>
       <h2 className={styles.abeducationlocal}><IoLocationSharp /> IronHack</h2>
       </div>
        </section>
          <ul className={styles.abeducationul} >
            <li> <IoIosArrowForward />The Ironhack Web Development Bootcamp equips students with the skills to build full-stack web applications. It covers HTML, CSS, JavaScript, Node.js, MongoDB, and React through hands-on projects.</li>
          </ul>
          <br />

        <section className={styles.abeducationsection} >
        <h3 className={styles.abeducationtitletwo}> Cinema </h3>
        <div className={styles.abeducationinfo}>
        <h2 className={styles.abeducationdate}> <FaCalendarCheck /> 01/2010 - 01/2012  </h2>
        <h2 className={styles.abeducationlocal}><IoLocationSharp /> Estácio De Sá Universidade</h2>
        </div>
        </section>
      
        
        </div>
        <div className={styles.box7}>
          <section className={styles.abproject} >
            <h2 className={styles.abprojecth2} >Homey App</h2>
            <a  className={styles.abprojecta} href="https://myhomey.netlify.app/">https://myhomey.netlify.app/</a>
            <ul className={styles.abprojectul} >
              <li  >The Homey is part of a Home Improvement Project Tracker
              application. This app allows users to organize and track their home improvement projects, ranging from everyday tasks like laundry to small fixes and major renovations.</li>
              <li >Created using React, Node.js, Express, MongoDB.</li>
            </ul>
          </section>
          
        </div>
       
      </div>
    </div>
  );
};

export default AboutContact;
