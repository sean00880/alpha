import React from "react";
import Split from "../Split";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Numbers2 = () => {
  React.useEffect(() => {
    console.clear();
  });
  return (
    <section className="block-sec section-padding">
      <div className="container">
        <div className="number-sec">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="item md-mb50">
                <span className="icon pe-7s-smile"></span>
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw={true} end={120} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow words chars splitting txt" data-splitting>
                    Happy Clients
                  </p>
                </Split>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="item md-mb50">
                <span className="icon pe-7s-portfolio"></span>
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw={true} end={123} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting " data-splitting>
                    Completed Projects
                  </p>
                </Split>
              </div>
            </div>
    
            <div className="col-lg-4 col-md-4">
              <div className="item">
                <span className="icon pe-7s-medal"></span>
                <h3 className="custom-font">
                  &nbsp;
                  <CountUp redraw={true} end={9} duration="3">
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span className="count" ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h3>
                <Split>
                  <p className="wow txt words chars splitting" data-splitting>
                    Awards Won
                  </p>
                </Split>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers2;
