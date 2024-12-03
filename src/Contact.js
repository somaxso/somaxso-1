import React from "react";
const Contact = () => {
  return (
    <>
      <section className="contact-section bd-bottom padding">
        <div className="map-pattern" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-details-wrap">
                <div className="section-heading mb-30">
                  <h4 className="sub-heading">Get In Touch</h4>
                  <h2>Have Any Questions?</h2>
                  <p>
                    Get in touch to discuss your employee wellbeing needs today.
                    Please give us a call, drop us an email or fill out the
                    contact form.
                  </p>
                </div>
                <ul className="contact-details">
                  <li>
                    <i className="las la-map-marked-alt" />
                    SCO-5, 2nd Floor, Sector-14,
                    <br /> Near Civil Hospital Hisar, 125001
                  </li>
                  <li>
                    <i className="las la-envelope-open" />
                    www.somaxso.com
                  </li>
                  <li>
                    <i className="las la-phone-volume" />
                    +91 8607638096 
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-form">
                <form
                  action="contact.php"
                  method="post"
                  id="ajax_contact"
                  className="form-horizontal"
                >
                  <div className="section-heading mb-30">
                    <h4 className="sub-heading">Contact With Us</h4>
                    <h2>Contact Form!</h2>
                  </div>
                  <div className="contact-form-group">
                    <div className="form-field">
                      <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        required=""
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        required=""
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="form-field">
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        required=""
                      />
                    </div>
                    <div className="form-field message">
                      <textarea
                        id="message"
                        name="message"
                        cols={30}
                        rows={4}
                        className="form-control"
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-field submit-btn">
                      <button id="submit" className="default-btn" type="submit">
                        Send Massage
                      </button>
                    </div>
                  </div>
                  <div id="form-messages" className="alert" role="alert" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
