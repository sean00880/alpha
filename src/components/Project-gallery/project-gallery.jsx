/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = () => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row" style={{justifyContent:"center"}}>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/1.jpg" />
          </a>
          <a href="#" className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/2.jpg" />
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
