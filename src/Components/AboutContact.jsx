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
            Antonia Trombetta Full-Stack Web Developer based in Bremen, germany
          </h1>
          <ul className={styles.abul}>
            <li className={styles.abcontactlist}>
              <CiMobile4 /> <a href={'tel: +4917660192182'}>+4915753652109</a>
              
            </li>
            <li className={styles.abcontactlist}>
              <TfiEmail /> <a href={'mailto: betatrombettamail@gmail.com'}>antonia.dorazio@gmail.com</a>
            </li>
            <li className={styles.abcontactlist}>
            <CiLinkedin /> <a href="https://www.linkedin.com/in/roberta-trombetta/">https://www.linkedin.com/in/antonia-trombetta/</a>
            </li>
            <li className={styles.abcontactlist}>
            <FiGithub /> <a href="https://github.com/betafalc2">https://github.com/TrombettasInc</a>
            </li>
          </ul>
        </div>

        <div className={styles.box2}>
          <p>
          I am a full-stack web developer with a strong background in customer service, 
          having recently completed the Ironhack Full-Stack Web Development Bootcamp, 
          where I gained proficiency in HTML, CSS, JavaScript, React, and MongoDB. 
          I have worked in diverse artistic and commercial settings, 
          which have strengthened my adaptability and interpersonal skills. 
          I take pride in motivating others and driving results, while my flexibility,
          practical mindset, and problem-solving abilities keep me focused on continuous improvement.
          With a positive attitude and a passion for learning, 
          I am ready to embrace new challenges and make a valuable impact.
          </p>
        </div>

        <div className={styles.box3}>
        <section className={styles.abexperiencesection} >
        <h3 className={styles.abexperiencejobtitle}> Team Supervisor Leader</h3>
        <div className={styles.abexperienceinfo}>
        <h2 className={styles.abexperiencedate}> <FaCalendarCheck />09/2013 - 09/2023  </h2>
        <h2 className={styles.abexperiencelocal}><IoLocationSharp /> Bremen</h2>
        </div>
        </section>
          <ul className={styles.abexperienceul} >
            <li> <IoIosArrowForward />Rapid Career Progression from Agent to Supervisor (2 Years):
            Promoted to Supervisor within two years due to exceptional performance and leadership potential.
            Demonstrated continuous growth over eight years as a Supervisor, developing skills in team management, 
            conflict resolution, and strategic planning.</li>
            <li><IoIosArrowForward /> Supervisory Experience for Portugal, Spain, and Latin America Markets:
            Provided supervisory support across multiple markets, adapting approaches to meet regional needs and cultural nuances.
            Led and mentored teams, contributing to consistent performance improvements and service excellence.</li>
            <li><IoIosArrowForward /> Administrative Task Management:
            Independently managed and documented administrative tasks, 
            ensuring smooth operations and accurate record-keeping.Streamlined processes to improve efficiency, 
            reducing administrative overhead and freeing up time for core tasks.</li>
            <li><IoIosArrowForward /> Customer Relationship Management:
            Built and maintained strong relationships with customers, 
            fostering loyalty and long-term engagement.Implemented strategies 
            to enhance the customer experience, leading to increased satisfaction and improved service metrics.</li>
            <li><IoIosArrowForward /> Customer Support, Reservations, and Booking:
            Delivered high-quality support in customer service, handling complex inquiries, reservations, and booking processes with efficiency and professionalism.
            Utilized problem-solving skills to address customer concerns, ensuring satisfaction and retention.</li>
            <li><IoIosArrowForward /> Daily email handling of the local account managers from Brazil and 
            Portugal</li>
          </ul>
          <br />

        <section className={styles.abexperiencesection} >
        <h3 className={styles.abexperiencejobtitle}> Catering And Events Manager</h3>
        <div className={styles.abexperienceinfo}>
        <h2 className={styles.abexperiencedate}> <FaCalendarCheck /> 04/2008 - 12/2012  </h2>
        <h2 className={styles.abexperiencelocal}><IoLocationSharp /> Rio de Janeiro</h2>
        </div>
        </section>

          <ul className={styles.abexperienceul} >
            <li> <IoIosArrowForward /> Responsible for Customer Service, Company Event Calendar Management, and Team Leadership:</li>
            <li><IoIosArrowForward /> Oversaw customer service operations, ensuring high standards of service and customer satisfaction.</li>
            <li><IoIosArrowForward /> Managed the scheduling and coordination of company events, optimizing the event calendar for seamless execution.</li>
            <li><IoIosArrowForward /> Sales and relationship management with customers</li>
            <li><IoIosArrowForward /> Led teams and professionals, fostering a collaborative environment and driving performance improvements.</li>
            </ul>
      
        </div>
        <div className={styles.box4}>

        <section className={styles.abachievementsection} >
          <ul className={styles.abachievementul} >
            <li className={styles.abachievementh2} > <IoDiamondOutline />Promoted to Team Supervisor within 2 years</li>
            <li>Giving support to a team and driving operational efficiency</li>
            <li className={styles.abachievementh2}><IoDiamondOutline />Ticketing Specialist  </li>
            <li>Streamlined ticketing processes using advanced knowledge of Amadeus</li>
            <li className={styles.abachievementh2} ><IoDiamondOutline /> Customer Support Excellence</li>
            <li>Successfully resolved complex booking and ticketing issues for international markets (Portugal, Spain, and Latin America).</li>
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
        <h3 className={styles.abeducationtitletwo}> Art Student</h3>
        <div className={styles.abeducationinfo}>
        <h2 className={styles.abeducationdate}> <FaCalendarCheck /> 01/2005 - 012/2010  </h2>
        <h2 className={styles.abeducationlocal}><IoLocationSharp /> EAV Parque Lage</h2>
        
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
