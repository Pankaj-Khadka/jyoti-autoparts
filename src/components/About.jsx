import companyConfig from "../config/companyConfig";

function About() {
  const experience =
    new Date().getFullYear() - Number(companyConfig.establishedYear);

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-content">
          <span className="section-label">
            ABOUT {companyConfig.companyName.toUpperCase()}
          </span>

          <h2>
            Quality & Reliability
            <br />
            <span>Since {companyConfig.establishedYear}</span>
          </h2>

          <p>
            {companyConfig.companyName} has been serving customers with
            quality automotive parts since {companyConfig.establishedYear}.
            We are committed to providing reliable products that meet
            the needs of our customers.
          </p>

          <p>
            We provide quality automotive components with a focus on
            reliability, durability and customer satisfaction.
          </p>

          <a href="#contact" className="about-button">
            Contact Us
          </a>
        </div>

        <div className="about-highlight">

          <div className="about-card">
            <strong>{companyConfig.establishedYear}</strong>
            <span>Established</span>
          </div>

          <div className="about-card">
            <strong>{experience}+</strong>
            <span>Years of Experience</span>
          </div>

          <div className="about-card">
            <strong>{companyConfig.products.length}+</strong>
            <span>Product Categories</span>
          </div>

          <div className="about-card">
            <strong>100%</strong>
            <span>Customer Focus</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;