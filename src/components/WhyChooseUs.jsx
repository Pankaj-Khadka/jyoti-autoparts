import companyConfig from "../config/companyConfig";

function WhyChooseUs() {
  const experience =
    new Date().getFullYear() - Number(companyConfig.establishedYear);

  const reasons = [
    {
      icon: "✓",
      title: "Quality Products",
      description:
        "We focus on providing quality automotive parts for dependable performance.",
    },
    {
      icon: "★",
      title: "Trusted Brands",
      description:
        "We deal in trusted brands such as Long Life, Dynamic, S S Power, Rapid and Core.",
    },
    {
      icon: "◷",
      title: `${experience}+ Years Experience`,
      description: `Serving customers with automotive parts since ${companyConfig.establishedYear}.`,
    },
    {
      icon: "◆",
      title: "Customer Focus",
      description:
        "We believe in reliable service, genuine guidance and long-term customer relationships.",
    },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-container">

        {/* Heading */}
        <div className="section-heading">
          <span className="section-label">WHY CHOOSE US</span>

          <h2>
            Why Choose
            <br />
            <span>{companyConfig.name}?</span>
          </h2>

          <p>
            Quality products, trusted brands and years of experience —
            everything you need from a reliable auto parts supplier.
          </p>
        </div>

        {/* Reasons */}
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {reason.icon}
              </div>

              <h3>{reason.title}</h3>

              <p>{reason.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;