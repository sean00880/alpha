/* eslint-disable @next/next/no-img-element */
import React from "react";

const Intro3 = () => {
  return (
    <header className="slider-stwo valign position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src="/img/slid/002.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <div className="sub-title mb-5">
                <h6>Welcome To Our Social Media Marketing Agency</h6>
              </div>
              <h1 className="mb-10 fw-600">Social Media Made Simple: Your Ultimate Marketing Partner</h1>
              <p>
              Through clever social media marketing initiatives, we assist companies in expanding their online presence. <br /> We can help you with everything from content production to audience engagement.
              </p>
              <ul>
                <li>
                  <div>
                    <span className="icon pe-7s-arc">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Branding</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon pe-7s-help2">
                      <span className="bord"></span>
                    </span>
                  </div>
                  <div className="cont">
                    <h6>Marketing</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Intro3;
