/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { Link as ScrollLink } from "react-scroll";

const BlogDetails = ({ theme }) => {
  const messageRef = React.useRef(null);
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendMessage = (ms) => new Promise((r) => setTimeout(r, ms));

  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Let's discuss the differences between Human vs. AI written blogs.
                      </h4>
                      <div className="spacial">
                        <p>
                        In the digital age, blogging has emerged as one of the most widely used platforms for both personal expression and information dissemination. Several people have pondered the future of human-written blogs and whether they will be supplanted by AI-generated content in light of the development of artificial intelligence (AI). We will examine the distinctions between blogs written by humans and those produced by artificial intelligence (AI) in this blog post, as well as the advantages and disadvantages of each.
                        </p>
                      </div>
                    
                    <p>Human-authored blogs are written by people who develop their own ideas, creativity, and writing abilities. Researching, planning, and using language to convey information and emotion are all parts of this process. Blogs that are authored by people often reflect the distinctive opinions and experiences of their authors. A style that draws readers in and maintains their interest can also make them interesting and engaging.</p>

                    <p>On the other hand, AI-written blogs are generated by algorithms and computer programs that are designed to analyze and synthesize large amounts of data. These programs use machine learning techniques to identify patterns and trends in the data, which they then use to generate text. AI-written blogs can be highly efficient, producing large volumes of content in a short amount of time. They can also be highly accurate, with fewer errors than human-written content.</p>
                    <p>However, there are also some drawbacks to AI-written blogs. For one, they lack the creativity and personal touch of human-written content. AI programs are limited by the data they are trained on, which means they may not be able to capture the nuances of human experience or emotions. They may also produce content that is formulaic or repetitive, lacking the unique voice and style that sets human-written content apart.</p>
                    <p>Another issue with AI-written blogs is that they can perpetuate biases and stereotypes that are present in the data they are trained on. For example, an AI program that is trained on data that is predominantly written by white men may produce content that is biased towards that demographic. This can lead to a lack of diversity and representation in the content that is generated.</p>
                     
                      <div className="quotes text-center">
                        <p>
                          Never ever think of giving up. Winners never quit and
                          quitters never win. Take all negative words out of
                          your mental dictionary and focus on the solutions with
                          utmost conviction and patience. The battle is never
                          lost until you’ve abandon your vision.
                        </p>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/2.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="mb-10">
                            <img src="/img/blog/3.jpg" alt="" />
                          </div>
                        </div>
                      </div>
                      <p>In conclusion, while AI-written blogs may have some advantages in terms of efficiency and accuracy, they cannot replace the creativity and personal touch of human-written content.</p>

                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                         
                        </div>
                       
                      </div>
                    </div>
                    <div className="author">
                      <div className="author-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          <span>author :</span> Site Dominion
                        </h6>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing. The main compont
                          of a healthy environment.
                        </p>
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;