/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row" style={{justifyContent:"center"}}>
          <a href="https://rank-crate.vercel.app/" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/7.jpg" />
          </a>
          <a href="https://rank-crate.vercel.app/" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/8.jpg" />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
