import React from "react";
import './App.css';
import image2 from './oraclelogo3.png';
import image3 from './monsterlogo3.png';
import image4 from './fairfieldlogo2.png'
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {<>
        <h1 className = "workExp">Work Experience</h1>

        <div className = "individual_job">
          
          <img className = "logo_image" src ={image2} alt = "House Image"/>
          
              <div className = "job_text_information">
                  <div className = "job_company_name"> 
                  <table>
                  <tr> <td><b>Data Scientist I</b></td></tr>
                  <tr><td><i>Oracle Corporation</i></td></tr>
                  </table>
                  </div>

                  <div className = "job_start_date">
                  <table>
                    <tr><td><b>January 2022 - Present</b> </td></tr>
                    <tr><td><i>Boston, MA</i></td></tr>
                  </table>
                  </div>

                <div className = "job_bullet_points">
                <table>
                <ul>
                  <li>Built a full stack Python application, using the Flask framework, which automatically scans an uploaded PDF of an AWS bill and outputs 
                    the original bill with the matching Oracle product. Converted the project to a desktop application, which was subsequently distributed 
                    among various Oracle teams for internal use. The application automated away a process that was done completely manually and reduced the process speed 
                    by over 95%. Continued to maintain the application and develop various updates to the code base for several months after project was completed</li>
                  <li>Developed an NLP machine learning model, which was deployed in a full stack Python application. The model assigns a grade to an Oracle sale 
                    opportunity based off the written text of the opportunity. The project was converted to a desktop application and is currently in production within 
                    the Oracle sales organization.</li>
                  <li>Developed and led a process to completely redesign and standardize the selection of targets for Oracle’s sales campaigns. Using Python and SQL, 
                    the new process improved the quality of sales targets, and the speed of which sales programs were launched by over 50%</li>
                  <li>Led and mentored a team of 3 analysts on the new sales campaign process. Taught them the process and monitored and assessed their continued progress. 
                    Acquired strong leadership and management skills during this mentoring process</li>
                  <li>Designed and wrote a Python script that performed NLP sentiment analysis on Oracle’s cloud sales opportunities. The results gave key business stakeholders 
                    a clearer picture on sales insights, in particular which competitors were also competing for the same deal.</li>

                </ul>
              </table>
              </div>
              </div>
        </div>  
<br></br>
<div className = "individual_job">
          
          <img className = "logo_image" src ={image3} alt = "House Image"/>
          
              <div className = "job_text_information">
                  <div className = "job_company_name"> 
                  <table>
                  <tr> <td><b>Software Engineer Intern</b></td></tr>
                  <tr><td><i>Monster.com</i></td></tr>
                  </table>
                  </div>

                  <div className = "job_start_date">
                  <table>
                    <tr><td><b>June 2021 - August 2021</b> </td></tr>
                    <tr><td><i>Boston, MA</i></td></tr>
                  </table>
                  </div>

                <div className = "job_bullet_points">
                <table>
                <ul>
                  <li>Built a React JS web application, which was used to visually compare the results of different internal search engines. The application was completed 
                    and is currently being used by the QA team to optimize different client facing search algorithms </li>
                  <li> Node JS and Java Springboot used for the backend</li>
                  <li><b>Skills:</b>  Git, React JS, Node JS, HTML, CSS</li>
                </ul>
              </table>
              </div>
              </div>
        </div> 
<br></br>
<h1 className = "workExp">Education</h1>
<br></br>
<div className = "individual_job">
          
          <img className = "logo_image" src ={image4} alt = "House Image"/>
          
              <div className = "job_text_information">
                  <div className = "job_company_name"> 
                  <table>
                  <tr> <td><b>Master of Science, Data Science</b></td></tr>
                  <tr><td><i>Fairfield University</i></td></tr>
                  </table>
                  </div>

                  <div className = "job_start_date">
                  <table>
                    <tr><td><b>September 2021 - May 2022</b> </td></tr>
                    <tr><td><i>Fairfield, CT</i></td></tr>
                  </table>
                  </div>

                <div className = "job_bullet_points">
                <table>
                <ul>
                  <li>Dean's List - School of Engineering</li>
                  <li>Team Leader of year-long capstone project</li>
                  <li>Capstone was a research project of the correlation between different types of crime and the housing prices in the immediate geographical area. Data was taken from police records and zillow historical housing prices in Boston, MA</li>
              
                </ul>
              </table>
              </div>
              </div>
        </div> 
        <br>
        </br>
        <div className = "individual_job">
          
          <img className = "logo_image" src ={image4} alt = "House Image"/>
          
              <div className = "job_text_information">
                  <div className = "job_company_name"> 
                  <table>
                  <tr> <td><b>Bachelor of Science, Computer Science</b></td></tr>
                  <tr><td><i>Fairfield University</i></td></tr>

                  </table>
                  </div>

                  <div className = "job_start_date">
                  <table>
                    <tr><td><b>September 2017 - May 2021</b> </td></tr>
                    <tr><td><i>Fairfield, CT</i></td></tr>
                  </table>
                  </div>

                <div className = "job_bullet_points">
                <table>
                <ul>
                <li>Dean's List - School of Engineering</li>
                <li>Loyola Scholar</li>
                <li>Created full stack web application that contained a machine learning model. Model analyzed a users physical measurements (height, weight, age, ect...) and predicted which types of medal the user would win in the 2016 Summer Olympics</li>
                </ul>
              </table>
              </div>
              </div>
        </div> 
<br></br>
      </>}
      </div>
    </div>
  );
};
 
export default Popup;