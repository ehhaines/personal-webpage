import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";
import MyParticles from "../particles.js";
import "./index.css";

const Blog = () => {
  const nav = useNavigate();
  return(
    <div>
      <MyParticles/>
      <button className="btn" onClick={() => nav('/')}><FontAwesomeIcon icon={faArrowLeft} className="display-5 text-secondary"/></button>
      <div className="col-md-8 offset-md-2 eh-blog">
        <div className="text-center w-100">
          <div className="display-3 w-100 text-secondary">
            const evansBlog = 
          </div>
        </div>
        <div className="text-start display-5 text-secondary">[</div>
        <div className="text-start display-5 text-secondary">]</div>
      </div>
    </div>
  );
}

export default Blog;