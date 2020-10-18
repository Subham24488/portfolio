import React from "react";
import project1 from "../../images/portfolioimg.jpg";
import project2 from "../../images/chatapp.png";
import project3 from "../../images/netflix.png";
import project4 from "../../images/covid19.jpeg";
import project5 from "../../images/html-css-javascript-lg.jpg";
import project6 from "../../images/snake.jpeg";
import project7 from '../../images/react-redux.png'

const Details = [
  {
    ProjectNo: "Ecommerce-Website",
    AboutProject: [
      <p>A Ecommerce-website made using, </p>,

      <ul>
        <li>REACT-js</li>
        <li>Redux</li>
        <li>SASS</li>
        <li>Node.js</li>
        <li>Stripe</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],

    Image: `${project7}`,
    url: "https://ecommerse-website.herokuapp.com/",
  },
  {
    ProjectNo: "PORTFOLIO",
    AboutProject: [
      <p>A responsive portfolio made using, </p>,

      <ul>
        <li>REACT-js</li>
        <li>Material-ui</li>
        <li>Firebase</li>
        <li>Node.js</li>
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
        <li>Node.js</li>
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
        <li>Node.js</li>
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
        <li>Node.js</li>
      </ul>,
      <h3>Run LIVE DEMO to see the project!</h3>,
    ],
    Image: `${project4}`,
    url: "https://vigilant-roentgen-765a35.netlify.app/",
  },
  
  
];

export default Details;
