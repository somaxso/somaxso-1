import React from "react";
const AboutUs = () => {
  return (
    <section className="about-section padding">
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4 className="sub-heading">About Our Company</h4>
          <h2>
            Deploy creative design to unlock your business's <br/>
            potential and drive lasting impact.
          </h2>
        </div>
        <div className="row">
          <div
            className="col-md-4 text-right wow fade-in-bottom"
            data-wow-delay="300ms"
          >
            <div className="about-img img-1">
              <img src="assets/img/about-1.jpg" alt="img" />
            </div>
          </div>
          <div className="col-md-5 d-flex align-items-center">
            <div
              className="about-content wow fade-in-bottom"
              data-wow-delay="500ms"
            >
              <p>
                Somaxso is empowering businesses with cutting-edge technological
                software solutions. From custom development to seamless
                deployment, we provide end-to-end services that drive
                innovation, streamline operations, and enhance performance. As a
                trusted name in the industry, we deliver tailored solutions that
                scale with your business, ensuring long-term success in an
                ever-evolving digital landscape.
              </p>
              <a href="about.html" className="read-more">
                <i className="las la-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-md-3 wow fade-in-bottom" data-wow-delay="400ms">
            <div className="about-img img-2">
              <img src="assets/img/about-2.jpg" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutUs;
