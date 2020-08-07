import React from "react";
import project1 from "../../images/portfolioimg.jpg";
import project2 from "../../images/chatapp.png";
import project3 from "../../images/netflix.png";
import project4 from "../../images/covid19.jpeg";
import project5 from "../../images/html-css-javascript-lg.jpg";
import project6 from "../../images/snake.jpeg";

const Details = [
  {
    ProjectNo: "PORTFOLIO",
    AboutProject: [
      <p>A responsive portfolio made using, </p>,

      <ul>
        <li>REACT-js</li>
        <li>Material-ui</li>
        <li>Firebase</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],

    Image: `${project1}`,
    url: "https://portfolio24488.web.app",
  },
  {
    ProjectNo: "SOCIAL-NETWORKING SITE",
    AboutProject: [
      <p>A responsive Social-Networking site made using, </p>,

      <ul>
        <li>MERN stack</li>
        <li>Material-ui</li>
        <li>REST api</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project2}`,
    url: "https://socialage24488.herokuapp.com/",
  },
  {
    ProjectNo: "NETFLIX-CLONE",
    AboutProject: [
      <p>A responsive Netflix-Clone application made using, </p>,

      <ul>
        <li>REACT</li>
        <li>API</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project3}`,
    url: "https://netflix-clone24488.web.app",
  },
  {
    ProjectNo: "COVID-19 TRACKER",
    AboutProject: [
      <p>A responsive Covid-19 Tracker application made using, </p>,

      <ul>
        <li>REACT</li>
        <li>API</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project4}`,
    url: "https://vigilant-roentgen-765a35.netlify.app/",
  },
  {
    ProjectNo: "SIMON'S GAME",
    AboutProject: [
      <p>A desktop game made using</p>,

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>,
      <h3>Only for PC. Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project5}`,
    url: "https://subham24488.github.io/simons_Game/",
  },
  {
    ProjectNo: "SNAKE GAME",
    AboutProject: [
      <p>A desktop game made using</p>,

      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
      </ul>,
      <h3>Only for PC. Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project6}`,
    url: "https://subham24488.github.io/simons_Game/",
  },
];

export default Details;
