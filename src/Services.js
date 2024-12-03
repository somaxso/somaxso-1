import React from "react";
const Services = () => {
  return (
    <section className="service-section bg-grey padding">
      <div className="corner-pattern" />
      <div className="corner-pattern bottom" />
      <div className="container">
        <div
          className="section-heading text-center mb-40 wow fade-in-bottom"
          data-wow-delay="200ms"
        >
          <h4 className="sub-heading white">Our Services</h4>
          <h2>
            Elevating Your Business with <br />
            Cutting-Edge Technology
          </h2>
        </div>
        <section className="service-section bg-grey padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-presentation" />
                  </div>
                  <h3>Web Development</h3>
                  <p>
                    Somaxso is your one-stop shop for crafting stunning,
                    functional websites and delivering top-notch web development
                    solutions.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-analysis-1" />
                  </div>
                  <h3>App Deveopment</h3>
                  <p>
                    Somaxso is your partner in transforming ideas into reality
                    through the development of exceptional, user-friendly, and
                    high-performance mobile apps.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-stats" />
                  </div>
                  <h3>UI/UX Design</h3>
                  <p>
                    Somaxso is your expert in crafting exceptional UI/UX designs
                    that are both visually appealing and user-friendly.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-profit" />
                  </div>
                  <h3>Testing And Quality Assurance</h3>
                  <p>
                    Somaxso is your expert partner in ensuring software
                    excellence through rigorous testing and quality assurance,
                    delivering bug-free and high-quality software.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-dollar" />
                  </div>
                  <h3>IT Training Programs</h3>
                  <p>
                    Somaxso offers comprehensive IT training programs to equip your
                    workforce with the latest tech skills and industry best
                    practices, catering to all levels of IT professionals.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-4 col-md-6 padding-15">
                <div className="service-item">
                  <div className="service-icon">
                    <i className="dl dl-success" />
                  </div>
                  <h3>Visual Graphics</h3>
                  <p>
                    Redias a trusted name for providing assistants. Initially
                    their main objective was to ensure service they provide
                    these people are loyal .
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Services;
