import React from "react";
import { useNavigate } from "react-router";
import MyParticles from '../particles.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import "./index.css";

const About = () => {
  const nav = useNavigate();
  return(
    <div>
      <MyParticles/>
      <div className="row" style={{"height": "100vh"}}>
        <div className="align-self-center text-center text-secondary eh-blur"> 
          <div className="display-6">
            <p>Hi - thanks for visiting my site! I'm currently earning my masters in computer science at Northeastern University in Boston. Before that, I studied physics at Bowdoin College. Feel free to contact me via Linkedin.</p>
            <div className="text-secondary">
              <span className="eh-home" title="Go to home" onClick={() => nav('/')}><FontAwesomeIcon icon={faHouse} className="display-6"/></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;