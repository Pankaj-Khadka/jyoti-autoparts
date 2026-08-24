import { useState } from "react";
import companyConfig from "../config/companyConfig";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry:", formData);

    alert("Thank you! Your enquiry has been submitted.");

    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <span className="section-label">CONTACT US</span>

          <h2>
            Let's Talk About
            <br />
            <span>Your Requirements</span>
          </h2>

          <p>
            Have a question about our products or need help finding
            the right auto part? Get in touch with us.
          </p>

          <div className="contact-details">

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>

              <div>
                <h4>Phone</h4>
                <a href={`tel:${companyConfig.phone}`}>
                  {companyConfig.phone}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>

              <div>
                <h4>Email</h4>
                <a href={`mailto:${companyConfig.email}`}>
                  {companyConfig.email}
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fas fa-location-dot"></i>
              </div>

              <div>
                <h4>Address</h4>
                <p>{companyConfig.address}</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side - Enquiry Form */}
        <div className="contact-form-wrapper">

          <h3>Send an Enquiry</h3>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="name">Name</label>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-row">

              <div className="form-group">
                <label htmlFor="phone">Phone</label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                />
              </div>

            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what you are looking for..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry
              <i className="fas fa-arrow-right"></i>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;