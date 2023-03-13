import React from "react";
import DarkTheme from "../layouts/Dark";
import Team from "../components/Team/team";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import Clients2 from "../components/Clients2/clients2";
import Blogs4 from "../components/blogs/Blogs4/blogs4";
import AboutUs4 from "../components/About-us4/about-us4";
import Services2 from "../components/Services2/services2";
import AboutUs2 from "../components/About-us2/about-us2";
import Works2 from "../components/Works2/works2";
import SContactForm from "../components/s-contact-form/s-contact-form";
import IntroWithSlider from "../components/Intro-with-slider/intro-with-slider";
import VideoWithTestimonials from "../components/Video-with-testimonials/video-with-testimonials";
import Numbers2 from "../components/Numbers2/numbers2";

const Homepage4 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs2 />
    
        <Services2 style="4item" />
        <AboutUs4 />
        <Works2 />
        <Numbers2 />
        <VideoWithTestimonials />
        <Clients2 theme="dark" length={4} />
        <Blogs4 />
        <SContactForm />
        <Footer hideBGCOLOR />
      </div>
    </DarkTheme>
  );
};

export default Homepage4;
