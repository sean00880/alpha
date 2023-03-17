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
                <img src="/img/blog/single2.jpg" alt="" />
              </div>
              <div className="content pt-60">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="cont">
                      <h4 className="extra-title">
                        Let's discuss how keyword research ties in with SEO.
                      </h4>
                      <div className="spacial">
                        <p>
                        Keywords are the foundation of Search Engine Optimization (SEO). Without the right keywords, your content will not be discovered by the right audience, and your website may not rank as high in search engine results pages (SERPs). That's why conducting keyword research is essential for any successful SEO strategy.</p>
                      </div>
                        <p>Keywords are the foundation of Search Engine Optimization (SEO). Without the right keywords, your content will not be discovered by the right audience, and your website may not rank as high in search engine results pages (SERPs). That's why conducting keyword research is essential for any successful SEO strategy.

</p>
                      <ul>
                        <li>
                          <span>01</span> <h6>Helps You Understand Your Audience:</h6> <br />Keyword research allows you to gain a deeper understanding of your target audience. By analyzing the keywords they use, you can get insights into their interests, pain points, and questions. This information can then be used to create content that resonates with them, engages them, and ultimately, converts them into customers.
                        </li>
                        <li>
                          <span>02</span> <h6>Allows You to Optimize Your Content:</h6> <br /> Once you have identified the keywords your audience is using, you can use them to optimize your website and content. By including relevant keywords in your title tags, meta descriptions, headers, and content, you signal to search engines that your content is relevant to the search query. This can help your website rank higher in SERPs, attract more traffic, and ultimately, generate more leads and sales.
                        </li>
                        <li>
                          <span>03</span> <h6>Helps You Discover New Opportunities:</h6>  <br /> Keyword research can also help you discover new opportunities to reach your audience. By identifying long-tail keywords and phrases, you can create content that targets specific niches and audiences. This can help you stand out from the competition, attract more qualified leads, and establish yourself as an authority in your industry.
                        </li>
                        <li>
                          <span>04</span> <h6>Influencer Marketing:</h6> <br /> Finally, keyword research allows you to measure the effectiveness of your SEO strategy. By tracking your rankings for different keywords, you can identify which ones are driving the most traffic and conversions to your website. This information can then be used to refine your SEO strategy, target high-performing keywords, and drive even more traffic and sales.
                        </li>
                      
                      </ul>

                      
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
                      <p>In conclusion, keyword research is an essential part of any successful SEO strategy. By understanding your audience, optimizing your content, discovering new opportunities, and measuring your performance, you can create a website that attracts organic traffic, generates leads, and drives revenue for your business.</p>

                      <div className="share-info">
                        <div className="social">
                          <a href="#0">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-twitter"></i>
                          </a>
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                        <div className="tags">
                          <a >Web</a>,<a >SEO</a>,
                          <a >Keywords</a>
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
                          <a href="#0">
                            <i className="fab fa-behance"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href={`/blog/blog-dark`}>
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>

              <div className="comments-area">
                <h5>Comments :</h5>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2022</span>
                    </h6>
                    <span className="replay">
                      <ScrollLink
                        to="comment-form"
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        Replay <i className="fas fa-reply"></i>
                      </ScrollLink>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="comment-form" id="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      comment: "",
                    }}
                    onSubmit={async (values) => {
                      await sendMessage(500);
                      alert(JSON.stringify(values, null, 2));
                      // Reset the values
                      values.name = "";
                      values.email = "";
                      values.comment = "";
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <div className="row">
                          <div className="col-12">
                            <div className="form-group">
                              <Field
                                as="textarea"
                                placeholder="Your Comment"
                                name="comment"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="text"
                                placeholder="Your Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <Field
                                type="email"
                                validate={validateEmail}
                                placeholder="Your Email"
                                name="email"
                              />
                              {errors.email && touched.email && (
                                <div>{errors.email}</div>
                              )}
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-group text-center">
                              <button
                                type="submit"
                                className={`nb butn ${
                                  theme
                                    ? theme === "light"
                                      ? "dark"
                                      : ""
                                    : "light"
                                } curve full-width`}
                              >
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </Form>
                    )}
                  </Formik>
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
