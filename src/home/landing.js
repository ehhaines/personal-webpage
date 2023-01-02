import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./index.css";
import { useNavigate } from "react-router";

const Landing = () => {
  const nav = useNavigate();
  return(
    <div className="row" style={{"height": "100vh"}}>
      <div className="align-self-center text-center"> 
        <div className="eh-blur p-3 m-3">
          <div className="display-1 text-secondary mb-3">Evan Haines</div>
          <div className="text-center mt-3 display-6 text-secondary">
            <span className="mx-3 px-3"><FontAwesomeIcon icon={faGithub} className="eh-github" onClick={() => window.open("https://github.com/ehhaines")}/></span>
            <span className="mx-3 px-3"><FontAwesomeIcon icon={faLinkedin} className="eh-linkedin" onClick={() => window.open("https://www.linkedin.com/in/ehhaines/")}/></span>
            <span className="mx-3 px-3"><FontAwesomeIcon icon={faTwitter} className="eh-twitter" onClick={() => window.open("https://twitter.com/lightsnosirens")}/></span>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div className="text-secondary">
            <span className="eh-display mx-3" onClick={() => nav('/about')}>about</span>
            <span className="eh-display mx-3" onClick={() => nav('/blog')}>blog</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;